package net.ollie.sandwich.deploy.source.multi;

import com.google.common.collect.Sets;
import net.ollie.sandwich.deploy.source.DeploymentSource;
import net.ollie.sandwich.deploy.source.DeploymentSourceHandler;
import net.ollie.sandwich.deploy.source.GetProgress;

import java.util.Set;

public record MultiDeploymentSource(String id, Set<? extends DeploymentSource> sources)
        implements DeploymentSource {

    @Override
    public GetProgress get() {
        final var progress = Sets.<GetProgress>newHashSet();
        sources.forEach(source -> progress.add(source.get()));
        return new MultiDeploymentGetProgress(progress);
    }

    @Override
    public <R> R handleWith(final DeploymentSourceHandler<R> handler) {
        return handler.handle(this);
    }

}
