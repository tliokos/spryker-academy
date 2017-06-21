define({"291":{i:0.00126950851035007,u:"../developing_with_spryker/yves/controllers_actions.html",a:"Used to be: http://spryker.github.io/development-guide/yves/controllers-actions/ Controllers are placed inside the Controllers folder in Yves; they provide an entry point to the system for requests submitted by the front-end users.\n The methods inside of a controller are called actions. Usually an ...",t:"Controllers and Actions"},"292":{i:0.00126950851035007,u:"../developing_with_spryker/yves/frontend_translations.html",a:"Used to be: http://spryker.github.io/development-guide/yves/frontend-translations/ Textual translations are handled by the Glossary-module. You can use the GlossaryFacade in Zed to add entries to Glossary (or you can use the Zed UI).\n\n \u003c?php\nclass GlossaryFacade extends AbstractFacade\n{\n    public ...",t:"Frontend Translations"},"293":{i:0.001496299695212,u:"../developing_with_spryker/yves/redis_as_kv.html",a:"Used to be: http://spryker.github.io/development-guide/yves/using-redis/ This article describes how Redis is used within Spryker; the current functionality can be extended according to your needs.\n About Redis is a key-value data store and for the values it supports a large collection of data ...",t:"Using Redis as a KV Storage"},"294":{i:0.00384357439189099,u:"../developing_with_spryker/yves/yves_url_routing.html",a:"Implementing URL Routing in Yves Used to be: http://spryker.github.io/development-guide/yves/url-routing/ The words contained in an URL play a major factor for search engine to determine if the page is relevant for a specific search query. The URL routing is a mechanism used to map URLs to the code ...",t:"URL Routing"},"295":{i:0.00136586375714282,u:"../developing_with_spryker/zed/zed.html",a:"Back-End Zed New In this section you will find the following content: Business Layer: Business Layer Business Models Custom Exceptions   Communication Layer: Controllers and Actions Persistence Layer Database Schema Definition Entity Persistence Layer Query Container Query Objects",t:"Back-End Zed"},"296":{i:0.00345930319083205,u:"../developing_with_spryker/zed/business_layer.html",a:"Used to be: http://spryker.github.io/development-guide/zed/business-layer/zed-business-layer/ Zed’s business layer is responsible for the entire business logic.  Most classes exist in this layer and this is the primary area for development.  The business layer is used by the communication layer and ...",t:"Business Layer"},"297":{i:0.00120518706273134,u:"../developing_with_spryker/zed/business_models.html",a:"Used to be: http://spryker.github.io/development-guide/zed/business-layer/business-models/ Business models are classes where you program the business logic of your system. With business logic we mean all kinds of algorithms (e.g. cart calculation), storage procedures (e.g. checkout save workflow) ...",t:"Business Models"},"298":{i:0.00120518706273134,u:"../developing_with_spryker/zed/custom_exceptions.html",a:"Used to be: http://spryker.github.io/development-guide/zed/business-layer/exception/ When you need to throw an exception, you should define your own type of exception. Later it is much easier to handle exceptions when the type represents a specific type of error. In Spryker exceptions are errors ...",t:"Custom Exceptions"},"299":{i:0.00125914107784197,u:"../developing_with_spryker/zed/facade/facade.html",a:"Used to be: http://spryker.github.io/development-guide/zed/business-layer/facade/ The facade acts as an internal API. The main responsibility of the facade is to hide the internal implementation. The simply only delegates the calls to internal business models. Similar to a remote web service, the ...",t:"Facade"},"300":{i:0.0014329470167263,u:"../developing_with_spryker/zed/facade/zed_facade_how_to_use.html",a:"1. How to use the facade from a controller or a plugin? In Zed’s communication layer the facade of the same module is available with the getFacade() method from all controllers and plugins. https://www.gliffy.com/go/html5/9650557 A typical usage from a controller looks like this. The controller ...",t:"How to Use a Facade"},"301":{i:0.0014329470167263,u:"../developing_with_spryker/zed/facade/zed_facade_how_to_implement.html",a:"AbstractFacade Every facade extends Spryker\\Zed\\Kernel\\Business\\AbstractFacade which provides an important method: Methods Inside a facade, the methods tell a story about the module. They expose  the module\u0027s functions and delegate calls to internal models. A typical method looks like this: ...",t:"How to Implement a Facade"},"302":{i:0.0014329470167263,u:"../developing_with_spryker/zed/facade/zed_facade_design_by_contract.html",a:"Every method in a facade contains an implicit promise. So a client expects that the behavior does not change in a minor update. Basically there are two types of possible changes. First there can be changes in the method’s signature for instance, when the name of the method or the order of the ...",t:"Design by Contract (DBC) - Facade"},"303":{i:0.00161493141210903,u:"../developing_with_spryker/zed/controllers_actions.html",a:"Used to be: http://spryker.github.io/development-guide/zed/communication-layer/controllers-actions/ Zed’s communication layer is the entry point to the system. Here are executed all of the external requests from users, the Yves-application and all command-line calls. The purpose of this layer is to ...",t:"Controllers and Actions"},"304":{i:0.00133586789452831,u:"../developing_with_spryker/zed/persistence_layer.html",a:"http://spryker.github.io/development-guide/zed/persistence-layer/overview/ Zed’s persistence layer is the owner of the schema, entities and queries. This layer knows the database structure and holds the connection to it.\n Integrated Technologies\n Propel\tFast and simple ORM Framework\nMySQL or ...",t:"Persistence Layer"},"305":{i:0.00455904329926296,u:"../developing_with_spryker/zed/database_schema_definition.html",a:"Used to be: http://spryker.github.io/development-guide/zed/persistence-layer/db-schema-definition/ With Propel, a database schema is defined in an XML-file. Each module carries it’s own part of the big schema that is collected and merged.   Propel’s documentation on defining the database schema:  ...",t:"Database Schema Definition"},"306":{i:0.00120518706273134,u:"../developing_with_spryker/zed/entity.html",a:"Used to be: http://spryker.github.io/development-guide/zed/persistence-layer/entity/ In Spryker an entity represents one entry from a table in the database. Entities are an implementation of the  Active record design pattern , so their usage is very simple.\nFor a full documentation see  Propel’s ...",t:"Entity"},"307":{i:0.00237277819965116,u:"../developing_with_spryker/zed/query_container.html",a:"Used to be: http://spryker.github.io/development-guide/zed/persistence-layer/query-container/ A query container holds all the database queries of the current module. Each module has exactly one query container, which also acts as an entry point to the persistence layer. Internally it uses  query ...",t:"Query Container"},"308":{i:0.0022136270489452,u:"../developing_with_spryker/zed/query_objects.html",a:"Used to be: http://spryker.github.io/development-guide/zed/persistence-layer/query-object/ Query objects provide an object-oriented API for writing database queries which are used in  query containers .\n Please check the official  Propel Query Reference  for a complete documentation.\n\n How to create ...",t:"Query Objects"},"309":{i:0.00140207404873434,u:"../enablement/enablement.html",a:"The enblement section of the Academy includes information and instructions designed to assist you in establishing your commercial web presence with the Spryker Commerce Operating System. Information Types:  HowTos  - short instructions that describe how to perform a single task. Migration Guides  - ...",t:"Enablement"},"310":{i:0.00137413079419971,u:"../enablement/howtos/how_tos.html",a:"HowTos are simple instructions to guide you through the process of performing a single task.    To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under the same category.  To ...",t:"HowTos"},"311":{i:0.00107618791332621,u:"../enablement/howtos/how_to_implement_direct_debit/ht_implement_dd.html",a:"This article describes the steps how to implement direct debit payment method without integrating with a third party payment service provider.\n For this example, we will add a new module called PaymentMethods.\n\n If it is your the first time creating a new module, check  Tutorial - Adding a New ...",t:"HowTo - Implement Direct Debit Payment"},"312":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_direct_debit/dd_fe_implementation.html",a:"Create a form\n In Yves, we start by building the form.  Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"Direct Debit Front-end Implementation"},"313":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_direct_debit/dd_checkout_implementation.html",a:"The next step is to integrate direct debit into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the direct debit form and handler into the Checkout module: Click to expand the code sample \u003c?php\n\nnamespace ...",t:"Integrate Direct Debit into Checkout"},"314":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_direct_debit/dd_be_implementation.html",a:"\nPersist payment details\nThe payment details for the direct debit payment method need to be persisted in the database. We’ll define a new table to store this data; inside the Persistence/Propel/Schema/ folder in Zed add the spy_directdebit_schema.xml file with the following content: \u003c?xml ...",t:"Direct Debit Back-End Implementation"},"315":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_direct_debit/dd_shared_implementation.html",a:"\nAs you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define these constants.\n ...",t:"Direct Debit Shared Implementation"},"316":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_direct_debit/dd_test_implementation.html",a:"Testing the Direct Debit Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"Testing the Direct Debit Implementation"},"317":{i:0.00107618791332621,u:"../enablement/howtos/ht_add_new_shipment_method.html",a:"This article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method method the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method"},"318":{i:0.00107618791332621,u:"../enablement/howtos/ht_create_personalized_prices.html",a:"Personalized Prices This article describes the steps that you need to consider when you need to implement personalized prices for customer groups.\n \nOverview\n When implementing special prices that are according to the group the customer is part of, several steps need to be considered.\n Extend ...",t:"HowTo - Create Personalized Prices"},"319":{i:0.00107618791332621,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_implement_invoice_payment.html",a:"Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment"},"320":{i:0.00157676846006602,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe.html",a:"Creating the form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Invoice Payment Front End"},"321":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_checkout.html",a:"The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the invoice form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo - Integrate Invoice Payment into Checkout"},"322":{i:0.00157676846006602,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_be.html",a:"Checkout plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Add the following 2 plugins in Zed, under the Communication/Plugin/Checkout/ folder of the new added module.\n\n ...",t:"HowTo - Implement Invoice Payment Back End"},"323":{i:0.00157676846006602,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe_be_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Invoice Payment - Shared Implementation"},"324":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_test.html",a:"HowTo - Implement Invoice Payment - Test When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"HowTo - Implement Invoice Payment - Test"},"325":{i:0.00107618791332621,u:"../enablement/howtos/how_to_implement_prepayment/ht_implement_prepayment.html",a:"Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment"},"326":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_fe.html",a:"Creating the form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End"},"327":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_checkout.html",a:"The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo - Integrate Prepayment into Checkout"},"328":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_be.html",a:"To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End"},"329":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared"},"330":{i:0.00122864888375601,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_test.html",a:"HowTo - Test Prepayment Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation"},"331":{i:0.00107618791332621,u:"../enablement/howtos/ht_product_data_import_frontend.html",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Import products to the SQL database\n Products are imported in the SQL database through the  Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"332":{i:0.00107618791332621,u:"../enablement/howtos/ht_mvp_project_structuring.html",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"333":{i:0.00717375796182836,u:"../enablement/howtos/ht_replace_bundle_dependancies.html",a:"Spryker Dependencies This content describes how to identify module dependencies and replace a dependent module with another one. Each Spryker module might have several dependent modules that provide communication, utilities and added functionality. Usually adjustments are done via our plugin ...",t:"HowTo - Replace Spryker Module Dependancies"},"334":{i:0.00170832060315569,u:"../enablement/howtos/ht_setup_hello_world_queue.html",a:"This HowTo demonstrates a simple Hello, World queue use case. We will create a hello queue and send/receive our messages to/from this queue with Hello, World content.  For this purpose, we will be using our default queue engine RabbitMQ.\n\n Preparation\n Before you begin, check to see that the ...",t:"HowTo - Set Up a \"Hello World\" Queue"},"335":{i:0.00478289233048276,u:"../enablement/howtos/ht_setup_stores_mutli_store_projects.html",a:"For the case in which you must support multiple stores in your application, this can be achieved through configuration.\n\nYou can setup the stores together with their settings such as date format or currency and also you can setup the default store for your application.\n\n Configure Stores\n The stores ...",t:"HowTo - Setup Multi-Store Projects"},"336":{i:0.00107618791332621,u:"../enablement/howtos/ht_setup_stores_multiple_locals.html",a:"Multiple Locales This article describes the steps that you need to consider when you have to setup stores with multiple locales.\n Configure Locales for Store\n The stores configuration can be found in the config/Shared/stores.php file. You can find out more about store configuration  here .\n\n For ...",t:"HowTo - Setup Stores with Multiple Locales"},"337":{i:0.00174003712323122,u:"../enablement/migration_guides/migration_guides.html",a:"Migration Guides are simple instructions to guide you through the process of upgrading a module to a newer version.    To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under ...",t:"Migration Guides"},"338":{i:0.00113717230149813,u:"../enablement/migration_guides/mg_availability.html",a:"Upgrading from version 3.* to version 4.*\n All Availability ui was moved to AvailabilitGui module, mostly Communication or Persistence were changed. If you have overwritten any of moved classes from those layers please change base class namespace from Availability to AvailabilityGui root.\n\n ...",t:"Migration Guide - Availability"},"339":{i:0.00767222438225716,u:"../enablement/migration_guides/mg_calculation.html",a:"Upgrading from version 3.* to version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating calculator stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation"},"340":{i:0.00113717230149813,u:"../enablement/migration_guides/mg_catalog.html",a:"Upgrading from version 3.* to version 4.*\n Due to introducing the Suggestion Search feature, the Catalog module now requires Search \u003e=5.2.\n\n To Upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog"},"341":{i:0.00717375796182836,u:"../enablement/migration_guides/mg_cms.html",a:"Upgrading from version 3|4.* to version 5.* CMSVersion 5.0 has new concept for showing the pages in frontend, in previous CMS versions, after creating the CMS page and running the collectors, we were be able to see the page in frontend, but now this has changed. After creating a cms page, another ...",t:"Migration Guide - CMS"},"342":{i:0.00113717230149813,u:"../enablement/migration_guides/mg_collector.html",a:"Upgrading from version 3.* to version 4.* With version 4 of the Collector module, we fixed the collector:search:export and collector:search:update console commands to run for all available locales instead of just for the current one. This behavior is now consistent with the storage collector command ...",t:"Migration Guide - Collector"},"343":{i:0.00201315966798197,u:"../enablement/migration_guides/mg_customer.html",a:"  Case-insensitive schema with PostgreSQL To learn more about citex see:  https://www.postgresql.org/docs/9.1/static/citext.html . The citext module provides the case-insensitive character string type: citext. Essentially, it internally calls lower when comparing values. Otherwise, it behaves almost ...",t:"Migration Guide - Customer"},"344":{i:0.00113717230149813,u:"../enablement/migration_guides/mg_discount_calculator_connector.html",a:"Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to separate repository in spryker/calculation-migration. To learn how to migrate to new structure see,  Upgrading from version 3.* to version ...",t:"Migration Guide - DiscountCalculatorConnector"},"345":{i:0.00113717230149813,u:"../enablement/migration_guides/mg_discount_sales_aggregator_connector.html",a:"Migration Guide - DiscountSalesAggregatorConnector Upgrading from version 2.* to version 3.*\n The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.",t:"Migration Guide - DiscountSalesAggregatorConnector"},"346":{i:0.00210377528661741,u:"../enablement/migration_guides/mg_oms.html",a:"Upgrading from version 6.* to version 7.* In version 7, OMS no longer uses SalesAggregator  to calculate totals, it is now done via the Calculator module. Therefore, there is no more dependency with SalesAggregator. The Spryker\\Zed\\Oms\\Business\\Mail\\MailHandler dependency to SalesAggregatorFacade ...",t:"Migration Guide - OMS"},"347":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_product.html",a:"Upgrading from version 2.* to version 3.*\n The Product module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .\n\n Upgrading from version 3.* to version 4.*\n 1. Database migration\n vendor/bin/console propel:diff, also manual review is necessary for the generated ...",t:"Migration Guide - Product"},"348":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_product_bundle.html",a:"Upgrading from version 2.* to version 3.*\n\n In version 3 the calculator plugin changed together with new calculator version.\n\n The ProductBundlePriceAggregatorPlugin - moved to the SalesAggregator module, so you may need to change the namespace ...",t:"Migration Guide - Product Bundle"},"349":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_product_option.html",a:"Upgrading from version 4.* to version 5.* In version 5 Product Options were updated to work with the new calculator concept. Therefore, the SalesAggregator plugin was moved to the SalesAggregator module SubtotalWithProductOptionsAggregatorPlugin. The sales option database tables received new columns ...",t:"Migration Guide - Product Option"},"350":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_product_option_discount_connector.html",a:"Migration Guide - ProductOptionDiscountConnector Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionDiscountConnector"},"351":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_product_option_exporter.html",a:"Migration Guide - ProductOptionExporter Upgrading from version 2.* to version 3.* The ProductOptionExporter module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionExporter"},"352":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_product_search.html",a:"Upgrading from version 3.* to version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"353":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_refund.html",a:"Upgrading from version 4.* to version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund"},"354":{i:0.00316393424931331,u:"../enablement/migration_guides/mg_sales.html",a:"Upgrading from version 5.* to version 6.* There are two steps to migrating to version 6 and they should be performed in the following order: Step 1: Migrating sales_order.fk_customer, sales_order.fk_shipment_method and sales_order.shipment_delivery_time related data, to the new structure. Do not run ...",t:"Migration Guide - Sales"},"355":{i:0.00270655133802392,u:"../enablement/migration_guides/mg_sales_aggregator.html",a:"Upgrading from version 4.* to version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator"},"356":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_search.html",a:"Upgrading from version 3.* to version 4.* With the version 4 of the Search module, the logic and configuration of how the results are sorted are changed. Previously there were two request parameters that controlled what field are we sorting by and what is the direction of the sort (e.g ...",t:"Migration Guide - Search"},"357":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_setup.html",a:"Upgrading from version 3.* to version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n   \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"358":{i:0.00107618791332621,u:"../enablement/migration_guides/mg_shipment.html",a:"Upgrading from version 4.* to version 5.* In version 5, shipment lost the direct foreign key sales.fk_shipment_method to the sales_order table, it was replaced with the spy_sales_shipment table where all shipment information is stored. A new SalesOrderHydration plugin was added to populate ...",t:"Migration Guide - Shipment"},"359":{i:0.00413207152564371,u:"../enablement/migration_guides/mg_shipment_and_customer_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Sales\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Sales Migration Console Command"},"360":{i:0.00855260461116766,u:"../enablement/migration_guides/mg_tax.html",a:"Upgrading from version 4.* to version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax"},});