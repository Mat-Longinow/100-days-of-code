IncomingMessage {
    _readableState:
        ReadableState {
        objectMode: false,
            highWaterMark: 16384,
            buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: true,
            ended: true,
            endEmitted: true,
            reading: false,
            sync: false,
            needReadable: false,
            emittedReadable: false,
            readableListening: false,
            resumeScheduled: false,
            paused: false,
            emitClose: true,
            autoDestroy: false,
            destroyed: false,
            defaultEncoding: 'utf8',
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null },
    readable: false,
        _events:
    [Object: null prototype] { end: [Function: resetHeadersTimeoutOnReqEnd] },
    _eventsCount: 1,
        _maxListeners: undefined,
        socket:
    Socket {
        connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState:
        ReadableState {
            objectMode: false,
                highWaterMark: 16384,
                buffer: BufferList { head: null, tail: null, length: 0 },
            length: 0,
                pipes: null,
                pipesCount: 0,
                flowing: true,
                ended: false,
                endEmitted: false,
                reading: true,
                sync: false,
                needReadable: true,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                paused: false,
                emitClose: false,
                autoDestroy: false,
                destroyed: false,
                defaultEncoding: 'utf8',
                awaitDrain: 0,
                readingMore: false,
                decoder: null,
                encoding: null },
        readable: true,
            _events:
        [Object: null prototype] {
            end: [Array],
                drain: [Array],
                timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
            error: [Function: socketOnError],
            close: [Array],
                resume: [Function: onSocketResume],
            pause: [Function: onSocketPause] },
        _eventsCount: 8,
            _maxListeners: undefined,
            _writableState:
        WritableState {
            objectMode: false,
                highWaterMark: 16384,
                finalCalled: false,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: 'utf8',
                length: 0,
                writing: false,
                corked: 0,
                sync: true,
                bufferProcessing: false,
                onwrite: [Function: bound onwrite],
            writecb: null,
                writelen: 0,
                bufferedRequest: null,
                lastBufferedRequest: null,
                pendingcb: 0,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: false,
                bufferedRequestCount: 0,
                corkedRequestsFree: [Object] },
        writable: true,
            allowHalfOpen: true,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server:
        Server {
            _events: [Object],
                _eventsCount: 2,
                _maxListeners: undefined,
                _connections: 1,
                _handle: [TCP],
                _usingWorkers: false,
                _workers: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                keepAliveTimeout: 5000,
                maxHeadersCount: null,
                headersTimeout: 40000,
                _connectionKey: '6::::1337',
                [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 6 },
        _server:
            Server {
            _events: [Object],
                _eventsCount: 2,
                _maxListeners: undefined,
                _connections: 1,
                _handle: [TCP],
                _usingWorkers: false,
                _workers: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                keepAliveTimeout: 5000,
                maxHeadersCount: null,
                headersTimeout: 40000,
                _connectionKey: '6::::1337',
                [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 6 },
        timeout: 120000,
            parser:
        HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
            _headers: [],
                _url: '',
                socket: [Circular],
                incoming: [Circular],
                outgoing: null,
                maxHeaderPairs: 2000,
                _consumed: true,
                onIncoming: [Function: bound parserOnIncoming],
            parsingHeadersStart: 1579237479688,
                [Symbol(isReused)]: false },
        on: [Function: socketOnWrap],
        _paused: false,
            _httpMessage:
        ServerResponse {
            _events: [Object],
                _eventsCount: 1,
                _maxListeners: undefined,
                outputData: [],
                outputSize: 0,
                writable: true,
                _last: false,
                chunkedEncoding: false,
                shouldKeepAlive: false,
                useChunkedEncodingByDefault: true,
                sendDate: true,
                _removedConnection: false,
                _removedContLen: false,
                _removedTE: false,
                _contentLength: null,
                _hasBody: true,
                _trailer: '',
                finished: false,
                _headerSent: false,
                socket: [Circular],
                connection: [Circular],
                _header: null,
                _onPendingData: [Function: bound updateOutgoingData],
            _sent100: false,
                _expect_continue: false,
                req: [Circular],
                locals: [Object: null prototype] {},
            [Symbol(isCorked)]: false,
                [Symbol(outHeadersKey)]: [Object] },
        [Symbol(asyncId)]: 9,
            [Symbol(kHandle)]:
        TCP {
            reading: true,
                onconnection: null,
                _consumed: true,
                [Symbol(owner)]: [Circular] },
        [Symbol(lastWriteQueueSize)]: 0,
            [Symbol(timeout)]:
        Timeout {
            _idleTimeout: 120000,
                _idlePrev: [TimersList],
                _idleNext: [TimersList],
                _idleStart: 7787,
                _onTimeout: [Function: bound ],
            _timerArgs: undefined,
                _repeat: null,
                _destroyed: false,
                [Symbol(refed)]: false,
                [Symbol(asyncId)]: 10,
                [Symbol(triggerId)]: 9 },
        [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0 },
    connection:
        Socket {
        connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState:
        ReadableState {
            objectMode: false,
                highWaterMark: 16384,
                buffer: BufferList { head: null, tail: null, length: 0 },
            length: 0,
                pipes: null,
                pipesCount: 0,
                flowing: true,
                ended: false,
                endEmitted: false,
                reading: true,
                sync: false,
                needReadable: true,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                paused: false,
                emitClose: false,
                autoDestroy: false,
                destroyed: false,
                defaultEncoding: 'utf8',
                awaitDrain: 0,
                readingMore: false,
                decoder: null,
                encoding: null },
        readable: true,
            _events:
        [Object: null prototype] {
            end: [Array],
                drain: [Array],
                timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
            error: [Function: socketOnError],
            close: [Array],
                resume: [Function: onSocketResume],
            pause: [Function: onSocketPause] },
        _eventsCount: 8,
            _maxListeners: undefined,
            _writableState:
        WritableState {
            objectMode: false,
                highWaterMark: 16384,
                finalCalled: false,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: 'utf8',
                length: 0,
                writing: false,
                corked: 0,
                sync: true,
                bufferProcessing: false,
                onwrite: [Function: bound onwrite],
            writecb: null,
                writelen: 0,
                bufferedRequest: null,
                lastBufferedRequest: null,
                pendingcb: 0,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: false,
                bufferedRequestCount: 0,
                corkedRequestsFree: [Object] },
        writable: true,
            allowHalfOpen: true,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server:
        Server {
            _events: [Object],
                _eventsCount: 2,
                _maxListeners: undefined,
                _connections: 1,
                _handle: [TCP],
                _usingWorkers: false,
                _workers: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                keepAliveTimeout: 5000,
                maxHeadersCount: null,
                headersTimeout: 40000,
                _connectionKey: '6::::1337',
                [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 6 },
        _server:
            Server {
            _events: [Object],
                _eventsCount: 2,
                _maxListeners: undefined,
                _connections: 1,
                _handle: [TCP],
                _usingWorkers: false,
                _workers: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                keepAliveTimeout: 5000,
                maxHeadersCount: null,
                headersTimeout: 40000,
                _connectionKey: '6::::1337',
                [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 6 },
        timeout: 120000,
            parser:
        HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
            _headers: [],
                _url: '',
                socket: [Circular],
                incoming: [Circular],
                outgoing: null,
                maxHeaderPairs: 2000,
                _consumed: true,
                onIncoming: [Function: bound parserOnIncoming],
            parsingHeadersStart: 1579237479688,
                [Symbol(isReused)]: false },
        on: [Function: socketOnWrap],
        _paused: false,
            _httpMessage:
        ServerResponse {
            _events: [Object],
                _eventsCount: 1,
                _maxListeners: undefined,
                outputData: [],
                outputSize: 0,
                writable: true,
                _last: false,
                chunkedEncoding: false,
                shouldKeepAlive: false,
                useChunkedEncodingByDefault: true,
                sendDate: true,
                _removedConnection: false,
                _removedContLen: false,
                _removedTE: false,
                _contentLength: null,
                _hasBody: true,
                _trailer: '',
                finished: false,
                _headerSent: false,
                socket: [Circular],
                connection: [Circular],
                _header: null,
                _onPendingData: [Function: bound updateOutgoingData],
            _sent100: false,
                _expect_continue: false,
                req: [Circular],
                locals: [Object: null prototype] {},
            [Symbol(isCorked)]: false,
                [Symbol(outHeadersKey)]: [Object] },
        [Symbol(asyncId)]: 9,
            [Symbol(kHandle)]:
        TCP {
            reading: true,
                onconnection: null,
                _consumed: true,
                [Symbol(owner)]: [Circular] },
        [Symbol(lastWriteQueueSize)]: 0,
            [Symbol(timeout)]:
        Timeout {
            _idleTimeout: 120000,
                _idlePrev: [TimersList],
                _idleNext: [TimersList],
                _idleStart: 7787,
                _onTimeout: [Function: bound ],
            _timerArgs: undefined,
                _repeat: null,
                _destroyed: false,
                [Symbol(refed)]: false,
                [Symbol(asyncId)]: 10,
                [Symbol(triggerId)]: 9 },
        [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0 },
    httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers:
    { host: 'localhost:1337',
        'user-agent': 'TwilioProxy/1.1',
        'content-length': '408',
        accept: '*/*',
        'cache-control': 'max-age=259200',
        connection: 'close',
        'content-type': 'application/x-www-form-urlencoded',
        'i-twilio-idempotency-token': 'ef55344f-6e3f-45bf-a764-a1b256df5c4e',
        'x-forwarded-for': '3.81.19.41',
        'x-forwarded-proto': 'https',
        'x-original-host': '5983cf61.ngrok.io',
        'x-twilio-signature': 'YlyVDkJgyb7vkURefHegFlLf9ks=' },
    rawHeaders:
        [ 'Host',
            'localhost:1337',
            'User-Agent',
            'TwilioProxy/1.1',
            'Content-Length',
            '408',
            'Accept',
            '*/*',
            'Cache-Control',
            'max-age=259200',
            'Connection',
            'close',
            'Content-Type',
            'application/x-www-form-urlencoded',
            'I-Twilio-Idempotency-Token',
            'ef55344f-6e3f-45bf-a764-a1b256df5c4e',
            'X-Forwarded-For',
            '3.81.19.41',
            'X-Forwarded-Proto',
            'https',
            'X-Original-Host',
            '5983cf61.ngrok.io',
            'X-Twilio-Signature',
            'YlyVDkJgyb7vkURefHegFlLf9ks=' ],
            trailers: {},
    rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '/sms',
        method: 'POST',
        statusCode: null,
        statusMessage: null,
        client:
    Socket {
        connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState:
        ReadableState {
            objectMode: false,
                highWaterMark: 16384,
                buffer: BufferList { head: null, tail: null, length: 0 },
            length: 0,
                pipes: null,
                pipesCount: 0,
                flowing: true,
                ended: false,
                endEmitted: false,
                reading: true,
                sync: false,
                needReadable: true,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                paused: false,
                emitClose: false,
                autoDestroy: false,
                destroyed: false,
                defaultEncoding: 'utf8',
                awaitDrain: 0,
                readingMore: false,
                decoder: null,
                encoding: null },
        readable: true,
            _events:
        [Object: null prototype] {
            end: [Array],
                drain: [Array],
                timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
            error: [Function: socketOnError],
            close: [Array],
                resume: [Function: onSocketResume],
            pause: [Function: onSocketPause] },
        _eventsCount: 8,
            _maxListeners: undefined,
            _writableState:
        WritableState {
            objectMode: false,
                highWaterMark: 16384,
                finalCalled: false,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: 'utf8',
                length: 0,
                writing: false,
                corked: 0,
                sync: true,
                bufferProcessing: false,
                onwrite: [Function: bound onwrite],
            writecb: null,
                writelen: 0,
                bufferedRequest: null,
                lastBufferedRequest: null,
                pendingcb: 0,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: false,
                bufferedRequestCount: 0,
                corkedRequestsFree: [Object] },
        writable: true,
            allowHalfOpen: true,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server:
        Server {
            _events: [Object],
                _eventsCount: 2,
                _maxListeners: undefined,
                _connections: 1,
                _handle: [TCP],
                _usingWorkers: false,
                _workers: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                keepAliveTimeout: 5000,
                maxHeadersCount: null,
                headersTimeout: 40000,
                _connectionKey: '6::::1337',
                [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 6 },
        _server:
            Server {
            _events: [Object],
                _eventsCount: 2,
                _maxListeners: undefined,
                _connections: 1,
                _handle: [TCP],
                _usingWorkers: false,
                _workers: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                keepAliveTimeout: 5000,
                maxHeadersCount: null,
                headersTimeout: 40000,
                _connectionKey: '6::::1337',
                [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 6 },
        timeout: 120000,
            parser:
        HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
            _headers: [],
                _url: '',
                socket: [Circular],
                incoming: [Circular],
                outgoing: null,
                maxHeaderPairs: 2000,
                _consumed: true,
                onIncoming: [Function: bound parserOnIncoming],
            parsingHeadersStart: 1579237479688,
                [Symbol(isReused)]: false },
        on: [Function: socketOnWrap],
        _paused: false,
            _httpMessage:
        ServerResponse {
            _events: [Object],
                _eventsCount: 1,
                _maxListeners: undefined,
                outputData: [],
                outputSize: 0,
                writable: true,
                _last: false,
                chunkedEncoding: false,
                shouldKeepAlive: false,
                useChunkedEncodingByDefault: true,
                sendDate: true,
                _removedConnection: false,
                _removedContLen: false,
                _removedTE: false,
                _contentLength: null,
                _hasBody: true,
                _trailer: '',
                finished: false,
                _headerSent: false,
                socket: [Circular],
                connection: [Circular],
                _header: null,
                _onPendingData: [Function: bound updateOutgoingData],
            _sent100: false,
                _expect_continue: false,
                req: [Circular],
                locals: [Object: null prototype] {},
            [Symbol(isCorked)]: false,
                [Symbol(outHeadersKey)]: [Object] },
        [Symbol(asyncId)]: 9,
            [Symbol(kHandle)]:
        TCP {
            reading: true,
                onconnection: null,
                _consumed: true,
                [Symbol(owner)]: [Circular] },
        [Symbol(lastWriteQueueSize)]: 0,
            [Symbol(timeout)]:
        Timeout {
            _idleTimeout: 120000,
                _idlePrev: [TimersList],
                _idleNext: [TimersList],
                _idleStart: 7787,
                _onTimeout: [Function: bound ],
            _timerArgs: undefined,
                _repeat: null,
                _destroyed: false,
                [Symbol(refed)]: false,
                [Symbol(asyncId)]: 10,
                [Symbol(triggerId)]: 9 },
        [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0 },
    _consuming: true,
        _dumped: false,
        next: [Function: next],
    baseUrl: '',
        originalUrl: '/sms',
        _parsedUrl:
    Url {
        protocol: null,
            slashes: null,
            auth: null,
            host: null,
            port: null,
            hostname: null,
            hash: null,
            search: null,
            query: null,
            pathname: '/sms',
            path: '/sms',
            href: '/sms',
            _raw: '/sms' },
    params: {},
    query: {},
    res:
        ServerResponse {
        _events:
            [Object: null prototype] { finish: [Function: bound resOnFinish] },
        _eventsCount: 1,
            _maxListeners: undefined,
            outputData: [],
            outputSize: 0,
            writable: true,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: false,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedConnection: false,
            _removedContLen: false,
            _removedTE: false,
            _contentLength: null,
            _hasBody: true,
            _trailer: '',
            finished: false,
            _headerSent: false,
            socket:
        Socket {
            connecting: false,
                _hadError: false,
                _parent: null,
                _host: null,
                _readableState: [ReadableState],
                readable: true,
                _events: [Object],
                _eventsCount: 8,
                _maxListeners: undefined,
                _writableState: [WritableState],
                writable: true,
                allowHalfOpen: true,
                _sockname: null,
                _pendingData: null,
                _pendingEncoding: '',
                server: [Server],
                _server: [Server],
                timeout: 120000,
                parser: [HTTPParser],
                on: [Function: socketOnWrap],
            _paused: false,
                _httpMessage: [Circular],
                [Symbol(asyncId)]: 9,
                [Symbol(kHandle)]: [TCP],
                [Symbol(lastWriteQueueSize)]: 0,
                [Symbol(timeout)]:
            Timeout {
                _idleTimeout: 120000,
                    _idlePrev: [TimersList],
                    _idleNext: [TimersList],
                    _idleStart: 7787,
                    _onTimeout: [Function: bound ],
                _timerArgs: undefined,
                    _repeat: null,
                    _destroyed: false,
                    [Symbol(refed)]: false,
                    [Symbol(asyncId)]: 10,
                    [Symbol(triggerId)]: 9 },
            [Symbol(kBytesRead)]: 0,
                [Symbol(kBytesWritten)]: 0 },
        connection:
            Socket {
            connecting: false,
                _hadError: false,
                _parent: null,
                _host: null,
                _readableState: [ReadableState],
                readable: true,
                _events: [Object],
                _eventsCount: 8,
                _maxListeners: undefined,
                _writableState: [WritableState],
                writable: true,
                allowHalfOpen: true,
                _sockname: null,
                _pendingData: null,
                _pendingEncoding: '',
                server: [Server],
                _server: [Server],
                timeout: 120000,
                parser: [HTTPParser],
                on: [Function: socketOnWrap],
            _paused: false,
                _httpMessage: [Circular],
                [Symbol(asyncId)]: 9,
                [Symbol(kHandle)]: [TCP],
                [Symbol(lastWriteQueueSize)]: 0,
                [Symbol(timeout)]:
            Timeout {
                _idleTimeout: 120000,
                    _idlePrev: [TimersList],
                    _idleNext: [TimersList],
                    _idleStart: 7787,
                    _onTimeout: [Function: bound ],
                _timerArgs: undefined,
                    _repeat: null,
                    _destroyed: false,
                    [Symbol(refed)]: false,
                    [Symbol(asyncId)]: 10,
                    [Symbol(triggerId)]: 9 },
            [Symbol(kBytesRead)]: 0,
                [Symbol(kBytesWritten)]: 0 },
        _header: null,
            _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
            _expect_continue: false,
            req: [Circular],
            locals: [Object: null prototype] {},
        [Symbol(isCorked)]: false,
            [Symbol(outHeadersKey)]: [Object: null prototype] { 'x-powered-by': [Array] } },
    body:
        [Object: null prototype] {
        ToCountry: 'US',
            ToState: 'CA',
            SmsMessageSid: 'SM8dbc70ab77c1defe5a4e05c0d7082fa0',
            NumMedia: '0',
            ToCity: 'ANAHEIM',
            FromZip: '92506',
            SmsSid: 'SM8dbc70ab77c1defe5a4e05c0d7082fa0',
            FromState: 'CA',
            SmsStatus: 'received',
            FromCity: 'RIVERSIDE',
            Body: 'test',
            FromCountry: 'US',
            To: '+17143404784',
            ToZip: '92887',
            NumSegments: '1',
            MessageSid: 'SM8dbc70ab77c1defe5a4e05c0d7082fa0',
            AccountSid: 'AC97a6bb3dd5ac849065028ee111ccb4a2',
            From: '+19516409304',
            ApiVersion: '2010-04-01' },
    _body: true,
        length: undefined,
        route:
    Route { path: '/sms', stack: [ [Layer] ], methods: { post: true } } }