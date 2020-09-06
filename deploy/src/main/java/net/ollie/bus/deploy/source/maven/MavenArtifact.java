package net.ollie.bus.deploy.source.maven;

public record MavenArtifact(String groupId, String artifactId, String version, String classifier, String type) {

    public MavenArtifact(String groupId, String artifactId, String version) {
        this(groupId, artifactId, version, null, null);
    }

    public boolean isSnapshot() {
        return version.endsWith("SNAPSHOT");
    }

}
