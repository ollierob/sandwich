// package: maven
// file: gitlab.proto

import * as jspb from "google-protobuf";

export class GitlabBuildSource extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getVariablesMap(): jspb.Map<string, string>;
  clearVariablesMap(): void;
  hasProjectid(): boolean;
  clearProjectid(): void;
  getProjectid(): string;
  setProjectid(value: string): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): GitlabProject | undefined;
  setProject(value?: GitlabProject): void;

  getFetchsourceid(): string;
  setFetchsourceid(value: string): void;

  getProjCase(): GitlabBuildSource.ProjCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitlabBuildSource.AsObject;
  static toObject(includeInstance: boolean, msg: GitlabBuildSource): GitlabBuildSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GitlabBuildSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitlabBuildSource;
  static deserializeBinaryFromReader(message: GitlabBuildSource, reader: jspb.BinaryReader): GitlabBuildSource;
}

export namespace GitlabBuildSource {
  export type AsObject = {
    id: string,
    variablesMap: Array<[string, string]>,
    projectid: string,
    project?: GitlabProject.AsObject,
    fetchsourceid: string,
  }

  export enum ProjCase {
    PROJ_NOT_SET = 0,
    PROJECTID = 3,
    PROJECT = 4,
  }
}

export class GitlabProject extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRef(): string;
  setRef(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitlabProject.AsObject;
  static toObject(includeInstance: boolean, msg: GitlabProject): GitlabProject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GitlabProject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitlabProject;
  static deserializeBinaryFromReader(message: GitlabProject, reader: jspb.BinaryReader): GitlabProject;
}

export namespace GitlabProject {
  export type AsObject = {
    id: string,
    name: string,
    ref: string,
    token: string,
    url: string,
  }
}

