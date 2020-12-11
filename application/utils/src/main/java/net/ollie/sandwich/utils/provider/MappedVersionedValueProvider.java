package net.ollie.sandwich.utils.provider;

import javax.annotation.Nonnull;

public abstract class MappedVersionedValueProvider<K, V>
        extends MappedKeyValueProvider<K, V>
        implements MutableVersionedValueProvider<K, V> {

    @Override
    public V put(final V value, final int expectedVersion) {
        if (expectedVersion == 0) {
            return this.putIfAbsent(this.key(value), value);
        } else {
            return map.compute(this.key(value), (k, v) -> v == null || this.version(v) == expectedVersion ? value : v);
        }
    }

    @Nonnull
    @Override
    public V delete(final K key) {
        return map.remove(key);
    }

}
