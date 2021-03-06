package net.ollie.sandwich.deploy.source.build.gitlab;

import net.ollie.sandwich.deploy.source.build.BuildProgress;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.function.Supplier;

class GitlabBuildProgress implements BuildProgress {

    private static final Logger logger = LoggerFactory.getLogger(GitlabBuildProgress.class);

    static final Duration POLL_FREQUENCY = Duration.ofSeconds(5);

    static BuildProgress of(
            final GitlabPipelineStatus initial,
            final Supplier<GitlabPipelineStatus> poll,
            final ScheduledExecutorService executor) {
        final var progress = new GitlabBuildProgress(initial);
        if (!initial.isDone()) progress.scheduleCheck(poll, executor);
        return progress;
    }

    private static Exception failureReason(final GitlabPipelineStatus status) {
        return new Exception("Build " + status.status());
    }

    private volatile GitlabPipelineStatus latestStatus;
    private ScheduledFuture<?> pollFuture;
    private final CompletableFuture<Void> future = new CompletableFuture<>();

    private GitlabBuildProgress(final GitlabPipelineStatus status) {
        this.latestStatus = status;
    }

    void scheduleCheck(final Supplier<GitlabPipelineStatus> poll, final ScheduledExecutorService executor) {
        pollFuture = executor.schedule(() -> {
            if (this.isDone(poll)) pollFuture.cancel(true);
        }, POLL_FREQUENCY.toNanos(), TimeUnit.NANOSECONDS);
    }

    private boolean isDone(final Supplier<GitlabPipelineStatus> poll) {
        try {
            latestStatus = poll.get();
            logger.debug("Latest status: {}", latestStatus);
            if (latestStatus.isFailed()) {
                future.completeExceptionally(failureReason(latestStatus));
                return true;
            }
            if (latestStatus.isSuccess()) {
                future.complete(null);
                return true;
            }
            return false;
        } catch (final Exception ex) {
            future.completeExceptionally(ex);
            return true;
        }
    }

    @Override
    public CompletableFuture<?> future() {
        return future;
    }

}
