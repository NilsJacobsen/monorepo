# @inlang/plugin-message-format

## 1.2.0

### Minor Changes

- 091db828e: fix: don't rely on { recursive: true } as the implemention differs per environment

## 1.1.0

### Minor Changes

- 79c809c8f: improve: the plugin is able to create directories if a the storage file does not exist yet.

  If a user initializes a new project that uses `./.inlang/plugin.inlang.messageFormat/messages.json` as path but the path does not exist yet, the plugin will now create all directories that are non-existend of the path yet and the `messages.json` file itself. This improvement makes getting started with the plugin easier.
