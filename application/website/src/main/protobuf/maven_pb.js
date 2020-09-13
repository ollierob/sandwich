/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.maven.MavenArtifact', null, global);
goog.exportSymbol('proto.maven.MavenCentral', null, global);
goog.exportSymbol('proto.maven.MavenDeploySource', null, global);
goog.exportSymbol('proto.maven.MavenRepository', null, global);
goog.exportSymbol('proto.maven.Nexus3Repository', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.maven.MavenDeploySource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.maven.MavenDeploySource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.maven.MavenDeploySource.displayName = 'proto.maven.MavenDeploySource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.maven.MavenRepository = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.maven.MavenRepository.oneofGroups_);
};
goog.inherits(proto.maven.MavenRepository, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.maven.MavenRepository.displayName = 'proto.maven.MavenRepository';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.maven.Nexus3Repository = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.maven.Nexus3Repository, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.maven.Nexus3Repository.displayName = 'proto.maven.Nexus3Repository';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.maven.MavenCentral = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.maven.MavenCentral, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.maven.MavenCentral.displayName = 'proto.maven.MavenCentral';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.maven.MavenArtifact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.maven.MavenArtifact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.maven.MavenArtifact.displayName = 'proto.maven.MavenArtifact';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.maven.MavenDeploySource.prototype.toObject = function(opt_includeInstance) {
  return proto.maven.MavenDeploySource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.maven.MavenDeploySource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.MavenDeploySource.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    artifact: (f = msg.getArtifact()) && proto.maven.MavenArtifact.toObject(includeInstance, f),
    repository: (f = msg.getRepository()) && proto.maven.MavenRepository.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.maven.MavenDeploySource}
 */
proto.maven.MavenDeploySource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.maven.MavenDeploySource;
  return proto.maven.MavenDeploySource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.maven.MavenDeploySource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.maven.MavenDeploySource}
 */
proto.maven.MavenDeploySource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.maven.MavenArtifact;
      reader.readMessage(value,proto.maven.MavenArtifact.deserializeBinaryFromReader);
      msg.setArtifact(value);
      break;
    case 3:
      var value = new proto.maven.MavenRepository;
      reader.readMessage(value,proto.maven.MavenRepository.deserializeBinaryFromReader);
      msg.setRepository(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.maven.MavenDeploySource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.maven.MavenDeploySource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.maven.MavenDeploySource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.MavenDeploySource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.maven.MavenArtifact.serializeBinaryToWriter
    );
  }
  f = message.getRepository();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.maven.MavenRepository.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.maven.MavenDeploySource.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.maven.MavenDeploySource.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MavenArtifact artifact = 2;
 * @return {?proto.maven.MavenArtifact}
 */
proto.maven.MavenDeploySource.prototype.getArtifact = function() {
  return /** @type{?proto.maven.MavenArtifact} */ (
    jspb.Message.getWrapperField(this, proto.maven.MavenArtifact, 2));
};


/** @param {?proto.maven.MavenArtifact|undefined} value */
proto.maven.MavenDeploySource.prototype.setArtifact = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.maven.MavenDeploySource.prototype.clearArtifact = function() {
  this.setArtifact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.maven.MavenDeploySource.prototype.hasArtifact = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MavenRepository repository = 3;
 * @return {?proto.maven.MavenRepository}
 */
proto.maven.MavenDeploySource.prototype.getRepository = function() {
  return /** @type{?proto.maven.MavenRepository} */ (
    jspb.Message.getWrapperField(this, proto.maven.MavenRepository, 3));
};


/** @param {?proto.maven.MavenRepository|undefined} value */
proto.maven.MavenDeploySource.prototype.setRepository = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.maven.MavenDeploySource.prototype.clearRepository = function() {
  this.setRepository(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.maven.MavenDeploySource.prototype.hasRepository = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.maven.MavenRepository.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.maven.MavenRepository.DefinitionCase = {
  DEFINITION_NOT_SET: 0,
  NEXUS3: 10,
  CENTRAL: 11
};

/**
 * @return {proto.maven.MavenRepository.DefinitionCase}
 */
proto.maven.MavenRepository.prototype.getDefinitionCase = function() {
  return /** @type {proto.maven.MavenRepository.DefinitionCase} */(jspb.Message.computeOneofCase(this, proto.maven.MavenRepository.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.maven.MavenRepository.prototype.toObject = function(opt_includeInstance) {
  return proto.maven.MavenRepository.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.maven.MavenRepository} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.MavenRepository.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nexus3: (f = msg.getNexus3()) && proto.maven.Nexus3Repository.toObject(includeInstance, f),
    central: (f = msg.getCentral()) && proto.maven.MavenCentral.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.maven.MavenRepository}
 */
proto.maven.MavenRepository.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.maven.MavenRepository;
  return proto.maven.MavenRepository.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.maven.MavenRepository} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.maven.MavenRepository}
 */
proto.maven.MavenRepository.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 10:
      var value = new proto.maven.Nexus3Repository;
      reader.readMessage(value,proto.maven.Nexus3Repository.deserializeBinaryFromReader);
      msg.setNexus3(value);
      break;
    case 11:
      var value = new proto.maven.MavenCentral;
      reader.readMessage(value,proto.maven.MavenCentral.deserializeBinaryFromReader);
      msg.setCentral(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.maven.MavenRepository.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.maven.MavenRepository.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.maven.MavenRepository} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.MavenRepository.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNexus3();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.maven.Nexus3Repository.serializeBinaryToWriter
    );
  }
  f = message.getCentral();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.maven.MavenCentral.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.maven.MavenRepository.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.maven.MavenRepository.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 version = 2;
 * @return {number}
 */
proto.maven.MavenRepository.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.maven.MavenRepository.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Nexus3Repository nexus3 = 10;
 * @return {?proto.maven.Nexus3Repository}
 */
proto.maven.MavenRepository.prototype.getNexus3 = function() {
  return /** @type{?proto.maven.Nexus3Repository} */ (
    jspb.Message.getWrapperField(this, proto.maven.Nexus3Repository, 10));
};


/** @param {?proto.maven.Nexus3Repository|undefined} value */
proto.maven.MavenRepository.prototype.setNexus3 = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.maven.MavenRepository.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.maven.MavenRepository.prototype.clearNexus3 = function() {
  this.setNexus3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.maven.MavenRepository.prototype.hasNexus3 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MavenCentral central = 11;
 * @return {?proto.maven.MavenCentral}
 */
proto.maven.MavenRepository.prototype.getCentral = function() {
  return /** @type{?proto.maven.MavenCentral} */ (
    jspb.Message.getWrapperField(this, proto.maven.MavenCentral, 11));
};


/** @param {?proto.maven.MavenCentral|undefined} value */
proto.maven.MavenRepository.prototype.setCentral = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.maven.MavenRepository.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.maven.MavenRepository.prototype.clearCentral = function() {
  this.setCentral(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.maven.MavenRepository.prototype.hasCentral = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.maven.Nexus3Repository.prototype.toObject = function(opt_includeInstance) {
  return proto.maven.Nexus3Repository.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.maven.Nexus3Repository} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.Nexus3Repository.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.maven.Nexus3Repository}
 */
proto.maven.Nexus3Repository.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.maven.Nexus3Repository;
  return proto.maven.Nexus3Repository.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.maven.Nexus3Repository} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.maven.Nexus3Repository}
 */
proto.maven.Nexus3Repository.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.maven.Nexus3Repository.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.maven.Nexus3Repository.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.maven.Nexus3Repository} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.Nexus3Repository.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.maven.Nexus3Repository.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.maven.Nexus3Repository.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.maven.Nexus3Repository.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.maven.Nexus3Repository.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.maven.Nexus3Repository.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.maven.Nexus3Repository.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.maven.MavenCentral.prototype.toObject = function(opt_includeInstance) {
  return proto.maven.MavenCentral.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.maven.MavenCentral} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.MavenCentral.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.maven.MavenCentral}
 */
proto.maven.MavenCentral.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.maven.MavenCentral;
  return proto.maven.MavenCentral.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.maven.MavenCentral} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.maven.MavenCentral}
 */
proto.maven.MavenCentral.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.maven.MavenCentral.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.maven.MavenCentral.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.maven.MavenCentral} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.MavenCentral.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.maven.MavenCentral.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.maven.MavenCentral.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.maven.MavenArtifact.prototype.toObject = function(opt_includeInstance) {
  return proto.maven.MavenArtifact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.maven.MavenArtifact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.MavenArtifact.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    artifactid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    classifier: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.maven.MavenArtifact}
 */
proto.maven.MavenArtifact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.maven.MavenArtifact;
  return proto.maven.MavenArtifact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.maven.MavenArtifact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.maven.MavenArtifact}
 */
proto.maven.MavenArtifact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtifactid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassifier(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.maven.MavenArtifact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.maven.MavenArtifact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.maven.MavenArtifact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.maven.MavenArtifact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArtifactid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClassifier();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string groupId = 1;
 * @return {string}
 */
proto.maven.MavenArtifact.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.maven.MavenArtifact.prototype.setGroupid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string artifactId = 2;
 * @return {string}
 */
proto.maven.MavenArtifact.prototype.getArtifactid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.maven.MavenArtifact.prototype.setArtifactid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.maven.MavenArtifact.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.maven.MavenArtifact.prototype.setVersion = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string classifier = 4;
 * @return {string}
 */
proto.maven.MavenArtifact.prototype.getClassifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.maven.MavenArtifact.prototype.setClassifier = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.maven.MavenArtifact.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.maven.MavenArtifact.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.maven);
