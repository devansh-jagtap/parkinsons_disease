
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ParkinsonPrediction
 * 
 */
export type ParkinsonPrediction = $Result.DefaultSelection<Prisma.$ParkinsonPredictionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ParkinsonPredictions
 * const parkinsonPredictions = await prisma.parkinsonPrediction.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ParkinsonPredictions
   * const parkinsonPredictions = await prisma.parkinsonPrediction.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.parkinsonPrediction`: Exposes CRUD operations for the **ParkinsonPrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkinsonPredictions
    * const parkinsonPredictions = await prisma.parkinsonPrediction.findMany()
    * ```
    */
  get parkinsonPrediction(): Prisma.ParkinsonPredictionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ParkinsonPrediction: 'ParkinsonPrediction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "parkinsonPrediction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ParkinsonPrediction: {
        payload: Prisma.$ParkinsonPredictionPayload<ExtArgs>
        fields: Prisma.ParkinsonPredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkinsonPredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkinsonPredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>
          }
          findFirst: {
            args: Prisma.ParkinsonPredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkinsonPredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>
          }
          findMany: {
            args: Prisma.ParkinsonPredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>[]
          }
          create: {
            args: Prisma.ParkinsonPredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>
          }
          createMany: {
            args: Prisma.ParkinsonPredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkinsonPredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>[]
          }
          delete: {
            args: Prisma.ParkinsonPredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>
          }
          update: {
            args: Prisma.ParkinsonPredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>
          }
          deleteMany: {
            args: Prisma.ParkinsonPredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkinsonPredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkinsonPredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>[]
          }
          upsert: {
            args: Prisma.ParkinsonPredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonPredictionPayload>
          }
          aggregate: {
            args: Prisma.ParkinsonPredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkinsonPrediction>
          }
          groupBy: {
            args: Prisma.ParkinsonPredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkinsonPredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkinsonPredictionCountArgs<ExtArgs>
            result: $Utils.Optional<ParkinsonPredictionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    parkinsonPrediction?: ParkinsonPredictionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ParkinsonPrediction
   */

  export type AggregateParkinsonPrediction = {
    _count: ParkinsonPredictionCountAggregateOutputType | null
    _avg: ParkinsonPredictionAvgAggregateOutputType | null
    _sum: ParkinsonPredictionSumAggregateOutputType | null
    _min: ParkinsonPredictionMinAggregateOutputType | null
    _max: ParkinsonPredictionMaxAggregateOutputType | null
  }

  export type ParkinsonPredictionAvgAggregateOutputType = {
    probability: number | null
  }

  export type ParkinsonPredictionSumAggregateOutputType = {
    probability: number | null
  }

  export type ParkinsonPredictionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    probability: number | null
    createdAt: Date | null
  }

  export type ParkinsonPredictionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    probability: number | null
    createdAt: Date | null
  }

  export type ParkinsonPredictionCountAggregateOutputType = {
    id: number
    userId: number
    inputData: number
    probability: number
    createdAt: number
    _all: number
  }


  export type ParkinsonPredictionAvgAggregateInputType = {
    probability?: true
  }

  export type ParkinsonPredictionSumAggregateInputType = {
    probability?: true
  }

  export type ParkinsonPredictionMinAggregateInputType = {
    id?: true
    userId?: true
    probability?: true
    createdAt?: true
  }

  export type ParkinsonPredictionMaxAggregateInputType = {
    id?: true
    userId?: true
    probability?: true
    createdAt?: true
  }

  export type ParkinsonPredictionCountAggregateInputType = {
    id?: true
    userId?: true
    inputData?: true
    probability?: true
    createdAt?: true
    _all?: true
  }

  export type ParkinsonPredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkinsonPrediction to aggregate.
     */
    where?: ParkinsonPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkinsonPredictions to fetch.
     */
    orderBy?: ParkinsonPredictionOrderByWithRelationInput | ParkinsonPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkinsonPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkinsonPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkinsonPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkinsonPredictions
    **/
    _count?: true | ParkinsonPredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkinsonPredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkinsonPredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkinsonPredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkinsonPredictionMaxAggregateInputType
  }

  export type GetParkinsonPredictionAggregateType<T extends ParkinsonPredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateParkinsonPrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkinsonPrediction[P]>
      : GetScalarType<T[P], AggregateParkinsonPrediction[P]>
  }




  export type ParkinsonPredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkinsonPredictionWhereInput
    orderBy?: ParkinsonPredictionOrderByWithAggregationInput | ParkinsonPredictionOrderByWithAggregationInput[]
    by: ParkinsonPredictionScalarFieldEnum[] | ParkinsonPredictionScalarFieldEnum
    having?: ParkinsonPredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkinsonPredictionCountAggregateInputType | true
    _avg?: ParkinsonPredictionAvgAggregateInputType
    _sum?: ParkinsonPredictionSumAggregateInputType
    _min?: ParkinsonPredictionMinAggregateInputType
    _max?: ParkinsonPredictionMaxAggregateInputType
  }

  export type ParkinsonPredictionGroupByOutputType = {
    id: string
    userId: string
    inputData: JsonValue
    probability: number
    createdAt: Date
    _count: ParkinsonPredictionCountAggregateOutputType | null
    _avg: ParkinsonPredictionAvgAggregateOutputType | null
    _sum: ParkinsonPredictionSumAggregateOutputType | null
    _min: ParkinsonPredictionMinAggregateOutputType | null
    _max: ParkinsonPredictionMaxAggregateOutputType | null
  }

  type GetParkinsonPredictionGroupByPayload<T extends ParkinsonPredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkinsonPredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkinsonPredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkinsonPredictionGroupByOutputType[P]>
            : GetScalarType<T[P], ParkinsonPredictionGroupByOutputType[P]>
        }
      >
    >


  export type ParkinsonPredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    inputData?: boolean
    probability?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["parkinsonPrediction"]>

  export type ParkinsonPredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    inputData?: boolean
    probability?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["parkinsonPrediction"]>

  export type ParkinsonPredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    inputData?: boolean
    probability?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["parkinsonPrediction"]>

  export type ParkinsonPredictionSelectScalar = {
    id?: boolean
    userId?: boolean
    inputData?: boolean
    probability?: boolean
    createdAt?: boolean
  }

  export type ParkinsonPredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "inputData" | "probability" | "createdAt", ExtArgs["result"]["parkinsonPrediction"]>

  export type $ParkinsonPredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkinsonPrediction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      inputData: Prisma.JsonValue
      probability: number
      createdAt: Date
    }, ExtArgs["result"]["parkinsonPrediction"]>
    composites: {}
  }

  type ParkinsonPredictionGetPayload<S extends boolean | null | undefined | ParkinsonPredictionDefaultArgs> = $Result.GetResult<Prisma.$ParkinsonPredictionPayload, S>

  type ParkinsonPredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkinsonPredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkinsonPredictionCountAggregateInputType | true
    }

  export interface ParkinsonPredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkinsonPrediction'], meta: { name: 'ParkinsonPrediction' } }
    /**
     * Find zero or one ParkinsonPrediction that matches the filter.
     * @param {ParkinsonPredictionFindUniqueArgs} args - Arguments to find a ParkinsonPrediction
     * @example
     * // Get one ParkinsonPrediction
     * const parkinsonPrediction = await prisma.parkinsonPrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkinsonPredictionFindUniqueArgs>(args: SelectSubset<T, ParkinsonPredictionFindUniqueArgs<ExtArgs>>): Prisma__ParkinsonPredictionClient<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkinsonPrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkinsonPredictionFindUniqueOrThrowArgs} args - Arguments to find a ParkinsonPrediction
     * @example
     * // Get one ParkinsonPrediction
     * const parkinsonPrediction = await prisma.parkinsonPrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkinsonPredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkinsonPredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkinsonPredictionClient<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkinsonPrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonPredictionFindFirstArgs} args - Arguments to find a ParkinsonPrediction
     * @example
     * // Get one ParkinsonPrediction
     * const parkinsonPrediction = await prisma.parkinsonPrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkinsonPredictionFindFirstArgs>(args?: SelectSubset<T, ParkinsonPredictionFindFirstArgs<ExtArgs>>): Prisma__ParkinsonPredictionClient<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkinsonPrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonPredictionFindFirstOrThrowArgs} args - Arguments to find a ParkinsonPrediction
     * @example
     * // Get one ParkinsonPrediction
     * const parkinsonPrediction = await prisma.parkinsonPrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkinsonPredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkinsonPredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkinsonPredictionClient<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkinsonPredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonPredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkinsonPredictions
     * const parkinsonPredictions = await prisma.parkinsonPrediction.findMany()
     * 
     * // Get first 10 ParkinsonPredictions
     * const parkinsonPredictions = await prisma.parkinsonPrediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkinsonPredictionWithIdOnly = await prisma.parkinsonPrediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkinsonPredictionFindManyArgs>(args?: SelectSubset<T, ParkinsonPredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkinsonPrediction.
     * @param {ParkinsonPredictionCreateArgs} args - Arguments to create a ParkinsonPrediction.
     * @example
     * // Create one ParkinsonPrediction
     * const ParkinsonPrediction = await prisma.parkinsonPrediction.create({
     *   data: {
     *     // ... data to create a ParkinsonPrediction
     *   }
     * })
     * 
     */
    create<T extends ParkinsonPredictionCreateArgs>(args: SelectSubset<T, ParkinsonPredictionCreateArgs<ExtArgs>>): Prisma__ParkinsonPredictionClient<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkinsonPredictions.
     * @param {ParkinsonPredictionCreateManyArgs} args - Arguments to create many ParkinsonPredictions.
     * @example
     * // Create many ParkinsonPredictions
     * const parkinsonPrediction = await prisma.parkinsonPrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkinsonPredictionCreateManyArgs>(args?: SelectSubset<T, ParkinsonPredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkinsonPredictions and returns the data saved in the database.
     * @param {ParkinsonPredictionCreateManyAndReturnArgs} args - Arguments to create many ParkinsonPredictions.
     * @example
     * // Create many ParkinsonPredictions
     * const parkinsonPrediction = await prisma.parkinsonPrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkinsonPredictions and only return the `id`
     * const parkinsonPredictionWithIdOnly = await prisma.parkinsonPrediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkinsonPredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkinsonPredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkinsonPrediction.
     * @param {ParkinsonPredictionDeleteArgs} args - Arguments to delete one ParkinsonPrediction.
     * @example
     * // Delete one ParkinsonPrediction
     * const ParkinsonPrediction = await prisma.parkinsonPrediction.delete({
     *   where: {
     *     // ... filter to delete one ParkinsonPrediction
     *   }
     * })
     * 
     */
    delete<T extends ParkinsonPredictionDeleteArgs>(args: SelectSubset<T, ParkinsonPredictionDeleteArgs<ExtArgs>>): Prisma__ParkinsonPredictionClient<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkinsonPrediction.
     * @param {ParkinsonPredictionUpdateArgs} args - Arguments to update one ParkinsonPrediction.
     * @example
     * // Update one ParkinsonPrediction
     * const parkinsonPrediction = await prisma.parkinsonPrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkinsonPredictionUpdateArgs>(args: SelectSubset<T, ParkinsonPredictionUpdateArgs<ExtArgs>>): Prisma__ParkinsonPredictionClient<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkinsonPredictions.
     * @param {ParkinsonPredictionDeleteManyArgs} args - Arguments to filter ParkinsonPredictions to delete.
     * @example
     * // Delete a few ParkinsonPredictions
     * const { count } = await prisma.parkinsonPrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkinsonPredictionDeleteManyArgs>(args?: SelectSubset<T, ParkinsonPredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkinsonPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonPredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkinsonPredictions
     * const parkinsonPrediction = await prisma.parkinsonPrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkinsonPredictionUpdateManyArgs>(args: SelectSubset<T, ParkinsonPredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkinsonPredictions and returns the data updated in the database.
     * @param {ParkinsonPredictionUpdateManyAndReturnArgs} args - Arguments to update many ParkinsonPredictions.
     * @example
     * // Update many ParkinsonPredictions
     * const parkinsonPrediction = await prisma.parkinsonPrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkinsonPredictions and only return the `id`
     * const parkinsonPredictionWithIdOnly = await prisma.parkinsonPrediction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkinsonPredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkinsonPredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkinsonPrediction.
     * @param {ParkinsonPredictionUpsertArgs} args - Arguments to update or create a ParkinsonPrediction.
     * @example
     * // Update or create a ParkinsonPrediction
     * const parkinsonPrediction = await prisma.parkinsonPrediction.upsert({
     *   create: {
     *     // ... data to create a ParkinsonPrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkinsonPrediction we want to update
     *   }
     * })
     */
    upsert<T extends ParkinsonPredictionUpsertArgs>(args: SelectSubset<T, ParkinsonPredictionUpsertArgs<ExtArgs>>): Prisma__ParkinsonPredictionClient<$Result.GetResult<Prisma.$ParkinsonPredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkinsonPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonPredictionCountArgs} args - Arguments to filter ParkinsonPredictions to count.
     * @example
     * // Count the number of ParkinsonPredictions
     * const count = await prisma.parkinsonPrediction.count({
     *   where: {
     *     // ... the filter for the ParkinsonPredictions we want to count
     *   }
     * })
    **/
    count<T extends ParkinsonPredictionCountArgs>(
      args?: Subset<T, ParkinsonPredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkinsonPredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkinsonPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonPredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkinsonPredictionAggregateArgs>(args: Subset<T, ParkinsonPredictionAggregateArgs>): Prisma.PrismaPromise<GetParkinsonPredictionAggregateType<T>>

    /**
     * Group by ParkinsonPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonPredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkinsonPredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkinsonPredictionGroupByArgs['orderBy'] }
        : { orderBy?: ParkinsonPredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkinsonPredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkinsonPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkinsonPrediction model
   */
  readonly fields: ParkinsonPredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkinsonPrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkinsonPredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkinsonPrediction model
   */
  interface ParkinsonPredictionFieldRefs {
    readonly id: FieldRef<"ParkinsonPrediction", 'String'>
    readonly userId: FieldRef<"ParkinsonPrediction", 'String'>
    readonly inputData: FieldRef<"ParkinsonPrediction", 'Json'>
    readonly probability: FieldRef<"ParkinsonPrediction", 'Float'>
    readonly createdAt: FieldRef<"ParkinsonPrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkinsonPrediction findUnique
   */
  export type ParkinsonPredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * Filter, which ParkinsonPrediction to fetch.
     */
    where: ParkinsonPredictionWhereUniqueInput
  }

  /**
   * ParkinsonPrediction findUniqueOrThrow
   */
  export type ParkinsonPredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * Filter, which ParkinsonPrediction to fetch.
     */
    where: ParkinsonPredictionWhereUniqueInput
  }

  /**
   * ParkinsonPrediction findFirst
   */
  export type ParkinsonPredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * Filter, which ParkinsonPrediction to fetch.
     */
    where?: ParkinsonPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkinsonPredictions to fetch.
     */
    orderBy?: ParkinsonPredictionOrderByWithRelationInput | ParkinsonPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkinsonPredictions.
     */
    cursor?: ParkinsonPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkinsonPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkinsonPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkinsonPredictions.
     */
    distinct?: ParkinsonPredictionScalarFieldEnum | ParkinsonPredictionScalarFieldEnum[]
  }

  /**
   * ParkinsonPrediction findFirstOrThrow
   */
  export type ParkinsonPredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * Filter, which ParkinsonPrediction to fetch.
     */
    where?: ParkinsonPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkinsonPredictions to fetch.
     */
    orderBy?: ParkinsonPredictionOrderByWithRelationInput | ParkinsonPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkinsonPredictions.
     */
    cursor?: ParkinsonPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkinsonPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkinsonPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkinsonPredictions.
     */
    distinct?: ParkinsonPredictionScalarFieldEnum | ParkinsonPredictionScalarFieldEnum[]
  }

  /**
   * ParkinsonPrediction findMany
   */
  export type ParkinsonPredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * Filter, which ParkinsonPredictions to fetch.
     */
    where?: ParkinsonPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkinsonPredictions to fetch.
     */
    orderBy?: ParkinsonPredictionOrderByWithRelationInput | ParkinsonPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkinsonPredictions.
     */
    cursor?: ParkinsonPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkinsonPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkinsonPredictions.
     */
    skip?: number
    distinct?: ParkinsonPredictionScalarFieldEnum | ParkinsonPredictionScalarFieldEnum[]
  }

  /**
   * ParkinsonPrediction create
   */
  export type ParkinsonPredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * The data needed to create a ParkinsonPrediction.
     */
    data: XOR<ParkinsonPredictionCreateInput, ParkinsonPredictionUncheckedCreateInput>
  }

  /**
   * ParkinsonPrediction createMany
   */
  export type ParkinsonPredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkinsonPredictions.
     */
    data: ParkinsonPredictionCreateManyInput | ParkinsonPredictionCreateManyInput[]
  }

  /**
   * ParkinsonPrediction createManyAndReturn
   */
  export type ParkinsonPredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * The data used to create many ParkinsonPredictions.
     */
    data: ParkinsonPredictionCreateManyInput | ParkinsonPredictionCreateManyInput[]
  }

  /**
   * ParkinsonPrediction update
   */
  export type ParkinsonPredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * The data needed to update a ParkinsonPrediction.
     */
    data: XOR<ParkinsonPredictionUpdateInput, ParkinsonPredictionUncheckedUpdateInput>
    /**
     * Choose, which ParkinsonPrediction to update.
     */
    where: ParkinsonPredictionWhereUniqueInput
  }

  /**
   * ParkinsonPrediction updateMany
   */
  export type ParkinsonPredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkinsonPredictions.
     */
    data: XOR<ParkinsonPredictionUpdateManyMutationInput, ParkinsonPredictionUncheckedUpdateManyInput>
    /**
     * Filter which ParkinsonPredictions to update
     */
    where?: ParkinsonPredictionWhereInput
    /**
     * Limit how many ParkinsonPredictions to update.
     */
    limit?: number
  }

  /**
   * ParkinsonPrediction updateManyAndReturn
   */
  export type ParkinsonPredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * The data used to update ParkinsonPredictions.
     */
    data: XOR<ParkinsonPredictionUpdateManyMutationInput, ParkinsonPredictionUncheckedUpdateManyInput>
    /**
     * Filter which ParkinsonPredictions to update
     */
    where?: ParkinsonPredictionWhereInput
    /**
     * Limit how many ParkinsonPredictions to update.
     */
    limit?: number
  }

  /**
   * ParkinsonPrediction upsert
   */
  export type ParkinsonPredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * The filter to search for the ParkinsonPrediction to update in case it exists.
     */
    where: ParkinsonPredictionWhereUniqueInput
    /**
     * In case the ParkinsonPrediction found by the `where` argument doesn't exist, create a new ParkinsonPrediction with this data.
     */
    create: XOR<ParkinsonPredictionCreateInput, ParkinsonPredictionUncheckedCreateInput>
    /**
     * In case the ParkinsonPrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkinsonPredictionUpdateInput, ParkinsonPredictionUncheckedUpdateInput>
  }

  /**
   * ParkinsonPrediction delete
   */
  export type ParkinsonPredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
    /**
     * Filter which ParkinsonPrediction to delete.
     */
    where: ParkinsonPredictionWhereUniqueInput
  }

  /**
   * ParkinsonPrediction deleteMany
   */
  export type ParkinsonPredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkinsonPredictions to delete
     */
    where?: ParkinsonPredictionWhereInput
    /**
     * Limit how many ParkinsonPredictions to delete.
     */
    limit?: number
  }

  /**
   * ParkinsonPrediction without action
   */
  export type ParkinsonPredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonPrediction
     */
    select?: ParkinsonPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonPrediction
     */
    omit?: ParkinsonPredictionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ParkinsonPredictionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    inputData: 'inputData',
    probability: 'probability',
    createdAt: 'createdAt'
  };

  export type ParkinsonPredictionScalarFieldEnum = (typeof ParkinsonPredictionScalarFieldEnum)[keyof typeof ParkinsonPredictionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ParkinsonPredictionWhereInput = {
    AND?: ParkinsonPredictionWhereInput | ParkinsonPredictionWhereInput[]
    OR?: ParkinsonPredictionWhereInput[]
    NOT?: ParkinsonPredictionWhereInput | ParkinsonPredictionWhereInput[]
    id?: StringFilter<"ParkinsonPrediction"> | string
    userId?: StringFilter<"ParkinsonPrediction"> | string
    inputData?: JsonFilter<"ParkinsonPrediction">
    probability?: FloatFilter<"ParkinsonPrediction"> | number
    createdAt?: DateTimeFilter<"ParkinsonPrediction"> | Date | string
  }

  export type ParkinsonPredictionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    inputData?: SortOrder
    probability?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkinsonPredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkinsonPredictionWhereInput | ParkinsonPredictionWhereInput[]
    OR?: ParkinsonPredictionWhereInput[]
    NOT?: ParkinsonPredictionWhereInput | ParkinsonPredictionWhereInput[]
    userId?: StringFilter<"ParkinsonPrediction"> | string
    inputData?: JsonFilter<"ParkinsonPrediction">
    probability?: FloatFilter<"ParkinsonPrediction"> | number
    createdAt?: DateTimeFilter<"ParkinsonPrediction"> | Date | string
  }, "id">

  export type ParkinsonPredictionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    inputData?: SortOrder
    probability?: SortOrder
    createdAt?: SortOrder
    _count?: ParkinsonPredictionCountOrderByAggregateInput
    _avg?: ParkinsonPredictionAvgOrderByAggregateInput
    _max?: ParkinsonPredictionMaxOrderByAggregateInput
    _min?: ParkinsonPredictionMinOrderByAggregateInput
    _sum?: ParkinsonPredictionSumOrderByAggregateInput
  }

  export type ParkinsonPredictionScalarWhereWithAggregatesInput = {
    AND?: ParkinsonPredictionScalarWhereWithAggregatesInput | ParkinsonPredictionScalarWhereWithAggregatesInput[]
    OR?: ParkinsonPredictionScalarWhereWithAggregatesInput[]
    NOT?: ParkinsonPredictionScalarWhereWithAggregatesInput | ParkinsonPredictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkinsonPrediction"> | string
    userId?: StringWithAggregatesFilter<"ParkinsonPrediction"> | string
    inputData?: JsonWithAggregatesFilter<"ParkinsonPrediction">
    probability?: FloatWithAggregatesFilter<"ParkinsonPrediction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ParkinsonPrediction"> | Date | string
  }

  export type ParkinsonPredictionCreateInput = {
    id?: string
    userId: string
    inputData: JsonNullValueInput | InputJsonValue
    probability: number
    createdAt?: Date | string
  }

  export type ParkinsonPredictionUncheckedCreateInput = {
    id?: string
    userId: string
    inputData: JsonNullValueInput | InputJsonValue
    probability: number
    createdAt?: Date | string
  }

  export type ParkinsonPredictionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    probability?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonPredictionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    probability?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonPredictionCreateManyInput = {
    id?: string
    userId: string
    inputData: JsonNullValueInput | InputJsonValue
    probability: number
    createdAt?: Date | string
  }

  export type ParkinsonPredictionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    probability?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonPredictionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    probability?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParkinsonPredictionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    inputData?: SortOrder
    probability?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkinsonPredictionAvgOrderByAggregateInput = {
    probability?: SortOrder
  }

  export type ParkinsonPredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    probability?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkinsonPredictionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    probability?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkinsonPredictionSumOrderByAggregateInput = {
    probability?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}