package net.ollie.bus.deploy;

import com.google.inject.AbstractModule;
import net.ollie.bus.deploy.repository.RepositoryModule;

public class DeployModule extends AbstractModule {

    @Override
    protected void configure() {
        super.configure();
        this.install(new RepositoryModule());
        this.bind(DeployResource.class);
    }

}