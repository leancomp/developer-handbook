(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{392:function(e,t,s){"use strict";s.r(t);var o=s(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_12-factor-apps"}},[e._v("12 Factor Apps")]),e._v(" "),s("p",[e._v("One popular methodology that can help you focus on the characteristics that matter most when creating cloud-ready web apps is the Twelve-Factor App philosophy. Written to help developers and operations teams understand the core qualities shared by web services designed to run in the cloud, the principles apply very well to software that will live in a clustered environment like Kubernetes. While monolithic applications can benefit from following these recommendations, microservices architectures designed around these principles work particularly well.")]),e._v(" "),s("p",[e._v("A quick summary of the Twelve Factors are:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Codebase")]),e._v(": Manage all code in version control systems (like Git or Mercurial). The codebase comprehensively dictates what is deployed.")]),e._v(" "),s("li",[s("strong",[e._v("Dependencies")]),e._v(": Dependencies should be managed entirely and explicitly by the codebase, either vendored (stored with the code) or version pinned in a format that a package manager can install from.")]),e._v(" "),s("li",[s("strong",[e._v("Config")]),e._v(": Separate configuration parameters from the application and define them in the deployment environment instead of baking them into the application itself.")]),e._v(" "),s("li",[s("strong",[e._v("Backing services")]),e._v(": Local and remote services are both abstracted as network-accessible resources with connection details set in configuration.")]),e._v(" "),s("li",[s("strong",[e._v("Build, release, run")]),e._v(": The build stage of your application should be completely separate from your application release and operations processes. The build stage creates a deployment artifact from source code, the release stage combines the artifact and configuration, and the run stage executes the release.")]),e._v(" "),s("li",[s("strong",[e._v("Processes")]),e._v(": Applications are implemented as processes that should not rely on storing state locally. State should be offloaded to a backing service as described in the fourth factor.")]),e._v(" "),s("li",[s("strong",[e._v("Port binding")]),e._v(": Applications should natively bind to a port and listen for connections. Routing and request forwarding should be handled externally.")]),e._v(" "),s("li",[s("strong",[e._v("Concurrency")]),e._v(": Applications should rely on scaling through the process model. Running multiple copies of an application concurrently, potentially across multiple servers, allows scaling without adjusting application code.")]),e._v(" "),s("li",[s("strong",[e._v("Disposability")]),e._v(": Processes should be able to start quickly and stop gracefully without serious side effects. Services should not store state so they can be disposed of and recreated at any time by the infrastructure.")]),e._v(" "),s("li",[s("strong",[e._v("Dev/prod parity")]),e._v(": Your testing, staging, and production environments should match closely and be kept in sync. Differences between environments are opportunities for incompatibilities and untested configurations to appear.")]),e._v(" "),s("li",[s("strong",[e._v("Logs")]),e._v(": Applications should stream logs to standard output so external services can decide how to best handle them.")]),e._v(" "),s("li",[s("strong",[e._v("Admin processes")]),e._v(": One-off administration processes should be run against specific releases and shipped with the main process code.")]),e._v(" "),s("li",[s("strong",[e._v("Stateless")]),e._v(": Applications should be stateless by design, and if they require to store state, they should bind to a data source to store it (i.e. backing service).")]),e._v(" "),s("li",[s("strong",[e._v("Telemetry")]),e._v(": Applications should expose metrics and health indicators.")])]),e._v(" "),s("p",[e._v("By adhering to the guidelines provided by the Twelve Factors, you can create and run applications using a model that fits the Kubernetes execution environment. The Twelve Factors encourage developers to focus on their application's primary responsibility, consider the operating conditions and interfaces between components, and use inputs, outputs, and standard process management features to run predictably in Kubernetes.")]),e._v(" "),s("h2",{attrs:{id:"references"}},[e._v("References")]),e._v(" "),s("ul",[s("li",[e._v("https://12factor.net/")])])])}),[],!1,null,null,null);t.default=n.exports}}]);