import { Result } from '@inlang/result';
import { Resource } from '@inlang/fluent-ast';

/**
 * Each converter must implement the interface.
 *
 * The underlying implementation can vastly differ per converter.
 * For example, some converters make us of PEG parsing, while others
 * "simply" parse and serialize with regular JavaScript/Typescript.
 */
export type Converter = {
    // TODO each converter should annotate what it's supports.
    // supports: {
    //     attributes: boolean;
    //     messages: boolean;
    //     references: boolean;
    //     selectors: boolean;
    //     variables: boolean;
    //     terms: boolean;
    // };
    parse(args: { data: string }): Result<Resource, Error>;
    serialize(args: { resource: Resource }): Result<string, Error>;
};
