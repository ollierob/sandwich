package net.ollie.bus.manage;

import com.google.inject.AbstractModule;

public class ManageModule extends AbstractModule {

    @Override
    protected void configure() {
        super.configure();
        this.bind(ManageResource.class);
    }

}
