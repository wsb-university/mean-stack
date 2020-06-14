type Post = {
  title: string;
  shortContent: string;
  longContent: string;
  _id?: string;
};

const postData: Array<Post> = [
  {
    title: 'Mongo DB',
    shortContent: `The database for
      modern applications
      MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.`,
    longContent: `<pre>  <span class="pl-c">// dodanie nowego wpisu</span>
    <span class="pl-k">await</span> <span class="pl-s1">db</span><span class="pl-kos">.</span><span class="pl-c1">users</span><span class="pl-kos">.</span><span class="pl-en">insert</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">'John Doe'</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  
    <span class="pl-c">// pobranie całej kolekcji</span>
    <span class="pl-k">const</span> <span class="pl-s1">users</span> <span class="pl-c1">=</span> <span class="pl-k">await</span> <span class="pl-s1">db</span><span class="pl-kos">.</span><span class="pl-c1">users</span><span class="pl-kos">.</span><span class="pl-en">find</span><span class="pl-kos">(</span><span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  
    <span class="pl-c">// znalezienie jednego wpisu po _id</span>
    <span class="pl-k">const</span> <span class="pl-s1">singleUser</span> <span class="pl-c1">=</span> <span class="pl-k">await</span> <span class="pl-s1">db</span><span class="pl-kos">.</span><span class="pl-c1">users</span><span class="pl-kos">.</span><span class="pl-en">find</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">_id</span>: <span class="pl-s">'KF1q6qzbzoiMJ1Yt'</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  
    <span class="pl-c">// aktualizacja całego wpisu</span>
    <span class="pl-k">await</span> <span class="pl-s1">db</span><span class="pl-kos">.</span><span class="pl-c1">users</span><span class="pl-kos">.</span><span class="pl-en">update</span><span class="pl-kos">(</span>
      <span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">'Jane Doe'</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
      <span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">'John Doe'</span><span class="pl-kos">,</span> <span class="pl-c1">age</span>: <span class="pl-c1">40</span> <span class="pl-kos">}</span>
    <span class="pl-kos">)</span><span class="pl-kos">;</span>
  
    <span class="pl-c">// aktualizacja wybranej części wpisu</span>
    <span class="pl-k">await</span> <span class="pl-s1">db</span><span class="pl-kos">.</span><span class="pl-c1">users</span><span class="pl-kos">.</span><span class="pl-en">update</span><span class="pl-kos">(</span>
      <span class="pl-kos">{</span> <span class="pl-c1">_id</span>: <span class="pl-s">'KF1q6qzbzoiMJ1Yt'</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
      <span class="pl-kos">{</span> <span class="pl-c1">$set</span>: <span class="pl-kos">{</span> <span class="pl-c1">age</span>: <span class="pl-c1">50</span> <span class="pl-kos">}</span> <span class="pl-kos">}</span>
    <span class="pl-kos">)</span><span class="pl-kos">;</span>
  
    <span class="pl-c">// usunięcie wpisu</span>
    <span class="pl-k">await</span> <span class="pl-s1">db</span><span class="pl-kos">.</span><span class="pl-c1">users</span><span class="pl-kos">.</span><span class="pl-en">remove</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">_id</span>: <span class="pl-s">'KF1q6qzbzoiMJ1Yt'</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>`,
    _id: '2',
  },

  {
    title: 'Express.js',
    shortContent: `Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js.[4]

    The original author, TJ Holowaychuk, described it as a Sinatra-inspired server,[5] meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of the MEAN stack, together with the MongoDB database software and AngularJS front-end framework.[6]`,
    longContent: `<p>Express.js was founded by TJ Holowaychuk. The first release, according to Express.js's&nbsp;<a title="GitHub" href="https://en.wikipedia.org/wiki/GitHub">GitHub</a>&nbsp;repository, was on the 22nd of May, 2010. Version 0.12</p>
    <p>In June 2014, rights to manage the project were acquired by&nbsp;<a class="mw-redirect" title="StrongLoop" href="https://en.wikipedia.org/wiki/StrongLoop">StrongLoop</a>.<sup id="cite_ref-strongloop-sponsor_7-0" class="reference"><a href="https://en.wikipedia.org/wiki/Express.js#cite_note-strongloop-sponsor-7">[7]</a></sup>&nbsp;StrongLoop was acquired by&nbsp;<a title="IBM" href="https://en.wikipedia.org/wiki/IBM">IBM</a>&nbsp;in September 2015;<sup id="cite_ref-iw-strongloopibm_8-0" class="reference"><a href="https://en.wikipedia.org/wiki/Express.js#cite_note-iw-strongloopibm-8">[8]</a></sup>&nbsp;in January 2016, IBM announced that it would place Express.js under the stewardship of the Node.js Foundation incubator.<sup id="cite_ref-iw-nodejsf_9-0" class="reference"><a href="https://en.wikipedia.org/wiki/Express.js#cite_note-iw-nodejsf-9">[9]</a></sup></p>`,
    _id: '3',
  },

  {
    title: 'Angular',
    shortContent: `Angular (commonly referred to as "Angular 2+" or "Angular v2 and above")[3][4] is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.`,
    longContent: `<p>Angular was designed as a ground-up rewrite of AngularJS.</p>
    <ul>
    <li>Angular does not have a concept of "scope" or controllers, instead it uses a hierarchy of components as its primary architectural characteristic.<sup id="cite_ref-5" class="reference"><a href="https://en.wikipedia.org/wiki/Angular_(web_framework)#cite_note-5">[5]</a></sup></li>
    <li>Angular has a different expression syntax, focusing on&nbsp;<code>"[ ]"</code>&nbsp;for&nbsp;<a title="Property (programming)" href="https://en.wikipedia.org/wiki/Property_(programming)">property</a>&nbsp;binding, and&nbsp;<code>"( )"</code>&nbsp;for&nbsp;<a title="Event (computing)" href="https://en.wikipedia.org/wiki/Event_(computing)">event</a>&nbsp;binding<sup id="cite_ref-6" class="reference"><a href="https://en.wikipedia.org/wiki/Angular_(web_framework)#cite_note-6">[6]</a></sup></li>
    <li>Modularity &ndash; much core functionality has moved to modules</li>
    <li>Angular recommends the use of&nbsp;<a title="Microsoft" href="https://en.wikipedia.org/wiki/Microsoft">Microsoft</a>'s&nbsp;<a title="TypeScript" href="https://en.wikipedia.org/wiki/TypeScript">TypeScript</a>&nbsp;language, which introduces the following features:
    <ul>
    <li><a class="mw-redirect" title="Static typing" href="https://en.wikipedia.org/wiki/Static_typing">Static typing</a>, including&nbsp;<a title="Generic programming" href="https://en.wikipedia.org/wiki/Generic_programming">Generics</a></li>
    <li><a title="Annotation" href="https://en.wikipedia.org/wiki/Annotation">Annotations</a></li>
    </ul>
    </li>
    <li><a title="TypeScript" href="https://en.wikipedia.org/wiki/TypeScript">TypeScript</a>&nbsp;is a superset of&nbsp;<a class="mw-redirect" title="ECMAScript 6" href="https://en.wikipedia.org/wiki/ECMAScript_6">ECMAScript 6</a>&nbsp;(ES6), and is&nbsp;<a title="Backward compatibility" href="https://en.wikipedia.org/wiki/Backward_compatibility">backwards compatible</a>&nbsp;with&nbsp;<a class="mw-redirect" title="ECMAScript 5" href="https://en.wikipedia.org/wiki/ECMAScript_5">ECMAScript 5</a>&nbsp;(i.e.: JavaScript).</li>
    <li><a title="Dynamic loading" href="https://en.wikipedia.org/wiki/Dynamic_loading">Dynamic loading</a></li>
    <li>Asynchronous template compilations</li>
    <li>Iterative callbacks provided by RxJS. RxJS limits state visibility and debugging, but these can be solved with reactive add-ons like ngReact or ngrx.</li>
    <li>Support for Angular Universal, which runs Angular applications on servers</li>
    </ul>`,
    _id: '4',
  },

  {
    title: 'Node.js',
    shortContent: `Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.`,
    longContent: `<p>Though&nbsp;<code>.js</code>&nbsp;is the standard&nbsp;<a title="Filename extension" href="https://en.wikipedia.org/wiki/Filename_extension">filename extension</a>&nbsp;for JavaScript code, the name "Node.js" doesn't refer to a particular file in this context and is merely the name of the product. Node.js has an&nbsp;<a title="Event-driven architecture" href="https://en.wikipedia.org/wiki/Event-driven_architecture">event-driven architecture</a>&nbsp;capable of&nbsp;<a title="Asynchronous I/O" href="https://en.wikipedia.org/wiki/Asynchronous_I/O">asynchronous I/O</a>. These design choices aim to optimize&nbsp;<a title="Throughput" href="https://en.wikipedia.org/wiki/Throughput">throughput</a>&nbsp;and&nbsp;<a title="Scalability" href="https://en.wikipedia.org/wiki/Scalability">scalability</a>&nbsp;in web applications with many input/output operations, as well as for&nbsp;<a class="mw-redirect" title="Real-time Web" href="https://en.wikipedia.org/wiki/Real-time_Web">real-time Web</a>&nbsp;applications (e.g.,&nbsp;<a title="Real-time communication" href="https://en.wikipedia.org/wiki/Real-time_communication">real-time communication</a>&nbsp;programs and&nbsp;<a title="Browser game" href="https://en.wikipedia.org/wiki/Browser_game">browser games</a>).<sup id="cite_ref-readwrite_7-0" class="reference"><a href="https://en.wikipedia.org/wiki/Node.js#cite_note-readwrite-7">[7]</a></sup></p>
    <p>The Node.js&nbsp;<a title="Distributed development" href="https://en.wikipedia.org/wiki/Distributed_development">distributed development</a>&nbsp;project was previously governed by the Node.js Foundation,<sup id="cite_ref-8" class="reference"><a href="https://en.wikipedia.org/wiki/Node.js#cite_note-8">[8]</a></sup>&nbsp;and has now merged with the&nbsp;<a class="mw-redirect" title="JS Foundation" href="https://en.wikipedia.org/wiki/JS_Foundation">JS Foundation</a>&nbsp;to form the&nbsp;<a class="mw-redirect" title="OpenJS Foundation" href="https://en.wikipedia.org/wiki/OpenJS_Foundation">OpenJS Foundation</a>, which is facilitated by the&nbsp;<a title="Linux Foundation" href="https://en.wikipedia.org/wiki/Linux_Foundation">Linux Foundation</a>'s Collaborative Projects program.<sup id="cite_ref-9" class="reference"><a href="https://en.wikipedia.org/wiki/Node.js#cite_note-9">[9]</a></sup></p>`,
    _id: '5',
  },

  {
    title: 'Basic Authentication',
    shortContent: `Basic authentication is a simple authentication scheme built into the HTTP protocol. The client sends HTTP requests with the Authorization header that contains the word Basic word followed by a space and a base64-encoded string username:password. For example, to authorize as demo / p@55w0rd the client would send`,
    longContent: `
    Base64 is a group of similar binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term Base64 originates from a specific MIME content transfer encoding.
    <p><strong>Base64</strong>&nbsp;is a group of similar&nbsp;<a class="external" href="https://en.wikipedia.org/wiki/Binary-to-text_encoding" rel="noopener">binary-to-text encoding</a>&nbsp;schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term&nbsp;<em>Base64</em>&nbsp;originates from a specific&nbsp;<a class="external" href="https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding" rel="noopener">MIME content transfer encoding</a>.</p>
      <p>Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII. This is to ensure that the data remain intact without modification during transport. Base64 is commonly used in a number of applications including email via&nbsp;<a class="external" href="https://en.wikipedia.org/wiki/MIME" rel="noopener">MIME</a>, and storing complex data in&nbsp;<a href="https://developer.mozilla.org/en-US/docs/XML">XML</a>.</p>
      <p>One common application of base64 encoding on the web is to encode binary data&nbsp; so it can be included in a&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs">data: URL</a>.</p>
      <p>In JavaScript there are two functions respectively for decoding and encoding&nbsp;<em>base64</em>&nbsp;strings:</p>
      <ul>
      <li><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa">btoa()</a></code>: creates a base-64 encoded ASCII string from a "string" of binary data ("btoa" should be read as "binary to ASCII").</li>
      <li><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob">atob()</a></code>: decodes a base64 encoded string("atob" should be read as "ASCII to binary").</li>
      </ul>
      <p>The algorithm used by&nbsp;<code>atob()</code>&nbsp;and&nbsp;<code>btoa()</code>&nbsp;is specified in&nbsp;<a class="external" href="https://tools.ietf.org/html/rfc4648" rel="noopener">RFC 4648</a>, section 4.</p>
      <p>Note that&nbsp;<code>btoa()</code>&nbsp;expects to be passed binary data, and will throw an exception if the given string contains any characters whose UTF-16 representation occupies more than one byte. For more details, see the documentation for&nbsp;<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa">btoa()</a></code>.</p>
      <div id="gtx-trans" style="position: absolute; left: 297px; top: 46.5px;">&nbsp;</div>`,
    _id: '1',
  },
];

export { Post, postData };
