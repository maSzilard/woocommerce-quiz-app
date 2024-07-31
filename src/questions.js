// src/questions.js
export const wooCommerceQuestions = [
    {
        question: "What hook is used to add custom fields to the product edit page in WooCommerce?",
        options: ["woocommerce_product_options_general_product_data", "woocommerce_admin_product_data_panels", "woocommerce_process_product_meta", "woocommerce_product_write_panels"],
        correctAnswer: "woocommerce_product_options_general_product_data",
        explanation: "The 'woocommerce_product_options_general_product_data' hook is used to add custom fields to the General tab of the product data meta box in the WooCommerce product edit page."
      },
      {
        question: "Which function is used to get the cart object in WooCommerce?",
        options: ["WC()->cart", "get_woocommerce_cart()", "WooCommerce::get_cart()", "$woocommerce->cart"],
        correctAnswer: "WC()->cart",
        explanation: "WC()->cart is the correct way to access the cart object in WooCommerce. It uses the WooCommerce() function, which returns the main WooCommerce instance, and then accesses the cart property."
      },
      {
        question: "What is the purpose of the 'woocommerce_checkout_fields' filter?",
        options: ["To add new payment gateways", "To modify the checkout form fields", "To change the order status", "To add new shipping methods"],
        correctAnswer: "To modify the checkout form fields",
        explanation: "The 'woocommerce_checkout_fields' filter allows developers to modify the checkout form fields. This includes adding, removing, or altering existing fields in the billing, shipping, and additional sections of the checkout form."
      },
      {
        question: "Which hook is used to add content after the order details on the thank you page?",
        options: ["woocommerce_thankyou", "woocommerce_after_order_details", "woocommerce_order_details_after_order_table", "woocommerce_checkout_after_order_review"],
        correctAnswer: "woocommerce_order_details_after_order_table",
        explanation: "The 'woocommerce_order_details_after_order_table' hook is used to add content after the order details table on the thank you page and in order emails."
      },
      {
        question: "What is the purpose of the 'wc_get_product()' function?",
        options: ["To create a new product", "To retrieve a product object", "To delete a product", "To update a product"],
        correctAnswer: "To retrieve a product object",
        explanation: "The 'wc_get_product()' function is used to retrieve a WC_Product object for a given product ID. This function returns an object that represents the product and provides access to all its properties and methods."
      },
      {
        question: "Which hook is used to modify the 'Add to Cart' button text?",
        options: ["woocommerce_product_add_to_cart_text", "woocommerce_add_to_cart_button_text", "woocommerce_add_cart_button_text", "woocommerce_product_button_text"],
        correctAnswer: "woocommerce_product_add_to_cart_text",
        explanation: "The 'woocommerce_product_add_to_cart_text' filter hook is used to modify the text of the 'Add to Cart' button for different product types in WooCommerce."
      },
      {
        question: "What is the purpose of the 'woocommerce_before_main_content' action hook?",
        options: ["To add content before the main shop page", "To modify the product layout", "To add custom styles to products", "To change the order of products"],
        correctAnswer: "To add content before the main shop page",
        explanation: "The 'woocommerce_before_main_content' action hook is used to add content or HTML before the main content area on WooCommerce pages, such as the shop page, product archives, and single product pages."
      },
      {
        question: "Which function is used to get the current user's orders in WooCommerce?",
        options: ["wc_get_orders()", "get_posts()", "wc_get_customer_orders()", "WC_Order::get_orders()"],
        correctAnswer: "wc_get_orders()",
        explanation: "The 'wc_get_orders()' function is used to retrieve orders in WooCommerce. To get the current user's orders, you would pass the current user's ID as a parameter to this function."
      },
      {
        question: "What is the purpose of the 'woocommerce_order_status_changed' action hook?",
        options: ["To modify order totals", "To send order notifications", "To trigger actions when an order's status changes", "To add custom order statuses"],
        correctAnswer: "To trigger actions when an order's status changes",
        explanation: "The 'woocommerce_order_status_changed' action hook is triggered whenever an order's status is changed. It allows developers to perform custom actions based on the new status of the order."
      },
      {
        question: "Which function is used to add a new tab to the product data meta box?",
        options: ["woocommerce_product_data_tabs", "add_product_data_tab()", "wc_add_product_tab()", "woocommerce_add_product_data_tab"],
        correctAnswer: "woocommerce_product_data_tabs",
        explanation: "The 'woocommerce_product_data_tabs' filter hook is used to add a new tab to the product data meta box in the WooCommerce product edit page."
      },
      {
        question: "What is the purpose of the 'woocommerce_get_price_html' filter?",
        options: ["To change product prices", "To modify how prices are displayed", "To add sale prices", "To remove prices from products"],
        correctAnswer: "To modify how prices are displayed",
        explanation: "The 'woocommerce_get_price_html' filter allows developers to modify the HTML output of product prices in WooCommerce. This can be used to change how prices are formatted and displayed throughout the store."
      },
      {
        question: "Which hook is used to add custom checkout fields in WooCommerce?",
        options: ["woocommerce_checkout_fields", "woocommerce_after_checkout_form", "woocommerce_checkout_update_order_meta", "woocommerce_checkout_process"],
        correctAnswer: "woocommerce_checkout_fields",
        explanation: "The 'woocommerce_checkout_fields' filter hook is used to add, remove, or modify checkout fields in WooCommerce. It allows developers to customize the checkout form by altering the fields array."
      },
      {
        question: "What is the purpose of the 'woocommerce_cart_calculate_fees' action hook?",
        options: ["To add shipping methods", "To modify product prices", "To add additional fees to the cart", "To change tax calculations"],
        correctAnswer: "To add additional fees to the cart",
        explanation: "The 'woocommerce_cart_calculate_fees' action hook is used to add additional fees to the cart in WooCommerce. This can be used for things like handling fees, gift wrapping charges, or any other custom fees you want to add to the order total."
      },
      {
        question: "Which function is used to get a specific order in WooCommerce?",
        options: ["WC_Order::get_order()", "wc_get_order()", "get_post()", "WC()->order->get()"],
        correctAnswer: "wc_get_order()",
        explanation: "The 'wc_get_order()' function is used to retrieve a specific order in WooCommerce. It returns a WC_Order object when provided with an order ID."
      },
      {
        question: "What is the purpose of the 'woocommerce_product_query' filter?",
        options: ["To modify search results", "To change product data", "To alter the main product query on shop pages", "To add custom product types"],
        correctAnswer: "To alter the main product query on shop pages",
        explanation: "The 'woocommerce_product_query' filter allows developers to modify the main product query on shop pages, category pages, and other product archives in WooCommerce. This can be used to change how products are queried and displayed."
      },
      {
        question: "Which hook is used to modify the content of product tabs in WooCommerce?",
        options: ["woocommerce_product_tabs", "woocommerce_product_tab_content", "woocommerce_product_description_tab", "woocommerce_default_product_tabs"],
        correctAnswer: "woocommerce_default_product_tabs",
        explanation: "The 'woocommerce_default_product_tabs' filter hook is used to modify the content and order of product tabs in WooCommerce. It allows developers to add, remove, or alter the default tabs on the single product page."
      },
      {
        question: "What is the purpose of the 'woocommerce_add_to_cart_validation' filter?",
        options: ["To change the add to cart button text", "To modify cart totals", "To validate items before they are added to the cart", "To redirect users after adding to cart"],
        correctAnswer: "To validate items before they are added to the cart",
        explanation: "The 'woocommerce_add_to_cart_validation' filter is used to perform custom validation before an item is added to the cart. It allows developers to add their own checks and potentially prevent items from being added to the cart based on certain conditions."
      },
      {
        question: "Which function is used to get the subtotal of the cart in WooCommerce?",
        options: ["WC()->cart->get_subtotal()", "wc_get_subtotal()", "WC()->get_cart_subtotal()", "$woocommerce->cart->subtotal"],
        correctAnswer: "WC()->cart->get_subtotal()",
        explanation: "The 'WC()->cart->get_subtotal()' function is used to retrieve the subtotal of the cart in WooCommerce. This returns the cart subtotal as a float."
      },
      {
        question: "What is the purpose of the 'woocommerce_get_availability' filter?",
        options: ["To change product prices", "To modify stock status display", "To add new product attributes", "To alter shipping methods"],
        correctAnswer: "To modify stock status display",
        explanation: "The 'woocommerce_get_availability' filter allows developers to modify how the stock status and availability of a product is displayed in WooCommerce. This can be used to customize the text and class of the availability message."
      },
      {
        question: "Which hook is used to add content to the thank you page after order details in WooCommerce?",
        options: ["woocommerce_thankyou", "woocommerce_after_thankyou", "woocommerce_order_details_after_order_table", "woocommerce_checkout_order_processed"],
        correctAnswer: "woocommerce_thankyou",
        explanation: "The 'woocommerce_thankyou' action hook is used to add content to the thank you page after the order details in WooCommerce. It's triggered on the thank you page and receives the order ID as a parameter."
      },
      {
        question: "What is the purpose of the 'woocommerce_email_classes' filter?",
        options: ["To change email templates", "To add new email notifications", "To modify email recipients", "To alter email sending frequency"],
        correctAnswer: "To add new email notifications",
        explanation: "The 'woocommerce_email_classes' filter is used to add new email notifications to WooCommerce. It allows developers to create custom email classes that integrate with WooCommerce's email system."
      },
      {
        question: "Which function is used to get the total number of items in the cart?",
        options: ["WC()->cart->get_cart_contents_count()", "WC()->cart->get_item_count()", "WC()->cart->get_total_quantity()", "WC()->cart->get_cart_items()"],
        correctAnswer: "WC()->cart->get_cart_contents_count()",
        explanation: "The 'WC()->cart->get_cart_contents_count()' function is used to get the total number of items in the cart in WooCommerce. This returns the sum of all item quantities."
      },
      {
        question: "What is the purpose of the 'woocommerce_checkout_update_order_meta' action hook?",
        options: ["To modify order totals", "To add custom data to orders", "To change order statuses", "To send order notifications"],
        correctAnswer: "To add custom data to orders",
        explanation: "The 'woocommerce_checkout_update_order_meta' action hook is used to add custom meta data to orders when they are created during the checkout process in WooCommerce."
      },
      {
        question: "Which hook is used to modify the product tabs on the single product page?",
        options: ["woocommerce_product_tabs", "woocommerce_default_product_tabs", "woocommerce_product_data_tabs", "woocommerce_single_product_tabs"],
        correctAnswer: "woocommerce_product_tabs",
        explanation: "The 'woocommerce_product_tabs' filter hook is used to modify the product tabs on the single product page in WooCommerce. It allows developers to add, remove, or alter the tabs and their content."
      },
      {
        question: "What is the purpose of the 'woocommerce_cart_item_removed' action hook?",
        options: ["To modify cart totals", "To trigger actions when an item is removed from the cart", "To change product prices", "To add items to the cart"],
        correctAnswer: "To trigger actions when an item is removed from the cart",
        explanation: "The 'woocommerce_cart_item_removed' action hook is triggered when an item is removed from the cart in WooCommerce. It allows developers to perform custom actions or calculations when this occurs."
      },
      {
        question: "Which function is used to get a specific product attribute in WooCommerce?",
        options: ["get_product_attribute()", "wc_get_product_attribute()", "WC_Product::get_attribute()", "woocommerce_get_attribute()"],
        correctAnswer: "WC_Product::get_attribute()",
        explanation: "The 'get_attribute()' method of the WC_Product class is used to get a specific product attribute in WooCommerce. It's called on a product object and takes the attribute name as a parameter."
      },
      {
        question: "What is the purpose of the 'woocommerce_order_status_{status}' action hook?",
        options: ["To change order status", "To trigger actions when an order status changes", "To modify order details", "To send customer notifications"],
        correctAnswer: "To trigger actions when an order status changes",
        explanation: "The 'woocommerce_order_status_{status}' action hook (where {status} is replaced with the actual status like 'completed' or 'processing') is triggered when an order's status is changed to that specific status. It allows developers to perform custom actions based on the new status of the order."
      },
      {
        question: "Which hook is used to modify the product price in WooCommerce?",
        options: ["woocommerce_product_get_price", "woocommerce_get_price", "woocommerce_price", "woocommerce_product_price"],
        correctAnswer: "woocommerce_product_get_price",
        explanation: "The 'woocommerce_product_get_price' filter hook is used to modify the product price in WooCommerce. It allows developers to change the price of a product programmatically before it's displayed or used in calculations."
      },
      {
        question: "What is the purpose of the 'woocommerce_cart_contents_changed' action hook?",
        options: ["To modify cart totals", "To trigger actions when cart contents change", "To add new products to the store", "To change shipping methods"],
        correctAnswer: "To trigger actions when cart contents change",
        explanation: "The 'woocommerce_cart_contents_changed' action hook is triggered when the contents of the cart change in WooCommerce. This allows developers to perform custom actions or calculations whenever items are added, removed, or quantities are changed in the cart."
      },
      {
        question: "Which function is used to get the total amount of the cart in WooCommerce?",
        options: ["WC()->cart->get_total()", "WC()->cart->calculate_totals()", "WC()->cart->get_cart_total()", "WC()->get_total()"],
        correctAnswer: "WC()->cart->get_total()",
        explanation: "The 'WC()->cart->get_total()' function is used to get the total amount of the cart in WooCommerce. This returns the cart total as a formatted string including the currency symbol."
      },
      {
        question: "What is the purpose of the 'woocommerce_product_related_posts_query' filter?",
        options: ["To change product descriptions", "To modify related products query", "To alter product reviews", "To add new product types"],
        correctAnswer: "To modify related products query",
        explanation: "The 'woocommerce_product_related_posts_query' filter allows developers to modify the query that fetches related products in WooCommerce. This can be used to change how related products are determined and displayed on single product pages."
      },
      {
        question: "Which hook is used to add custom order actions in WooCommerce admin?",
        options: ["woocommerce_order_actions", "woocommerce_admin_order_actions", "woocommerce_order_custom_actions", "woocommerce_add_order_actions"],
        correctAnswer: "woocommerce_order_actions",
        explanation: "The 'woocommerce_order_actions' filter hook is used to add custom order actions in the WooCommerce admin panel. These actions appear in the order actions meta box on the order edit page."
      },
      {
        question: "What is the purpose of the 'woocommerce_currency_symbol' filter?",
        options: ["To change product prices", "To modify currency conversion rates", "To alter the display of currency symbols", "To add new currencies"],
        correctAnswer: "To alter the display of currency symbols",
        explanation: "The 'woocommerce_currency_symbol' filter allows developers to modify how currency symbols are displayed in WooCommerce. This can be used to change the symbol for a specific currency or to add custom formatting."
      },
      {
        question: "Which function is used to get the customer's billing email in WooCommerce?",
        options: ["WC_Order::get_billing_email()", "wc_get_order()->get_billing_email()", "get_post_meta($order_id, '_billing_email', true)", "WC()->customer->get_billing_email()"],
        correctAnswer: "WC_Order::get_billing_email()",
        explanation: "The 'get_billing_email()' method of the WC_Order class is used to get the customer's billing email for a specific order in WooCommerce. It's called on an order object."
      },
      {
        question: "What is the purpose of the 'woocommerce_checkout_posted_data' filter?",
        options: ["To validate checkout fields", "To modify posted checkout data", "To change order status", "To add new payment gateways"],
        correctAnswer: "To modify posted checkout data",
        explanation: "The 'woocommerce_checkout_posted_data' filter allows developers to modify the data posted during the checkout process in WooCommerce. This can be used to alter or sanitize the data before it's used to create the order."
      },
      {
        question: "Which hook is used to modify the 'Place order' button text on the checkout page?",
        options: ["woocommerce_order_button_text", "woocommerce_checkout_place_order_text", "woocommerce_checkout_button_text", "woocommerce_place_order_button_text"],
        correctAnswer: "woocommerce_order_button_text",
        explanation: "The 'woocommerce_order_button_text' filter hook is used to modify the text of the 'Place order' button on the WooCommerce checkout page."
      },
      {
        question: "What is the purpose of the 'woocommerce_products_widget_query_args' filter?",
        options: ["To change product widget display", "To modify product widget query arguments", "To add new widgets", "To alter widget styles"],
        correctAnswer: "To modify product widget query arguments",
        explanation: "The 'woocommerce_products_widget_query_args' filter allows developers to modify the query arguments used in WooCommerce product widgets. This can be used to change which products are displayed in these widgets."
      },
      {
        question: "Which function is used to get the order notes in WooCommerce?",
        options: ["WC_Order::get_order_notes()", "wc_get_order_notes()", "get_comments()", "WC()->order->get_notes()"],
        correctAnswer: "wc_get_order_notes()",
        explanation: "The 'wc_get_order_notes()' function is used to get the order notes in WooCommerce. It retrieves both customer-visible and private notes for a given order."
      },
      {
        question: "What is the purpose of the 'woocommerce_payment_complete' action hook?",
        options: ["To add new payment methods", "To trigger actions when payment is completed", "To modify order totals", "To change order status"],
        correctAnswer: "To trigger actions when payment is completed",
        explanation: "The 'woocommerce_payment_complete' action hook is triggered when a payment is marked as complete in WooCommerce. This allows developers to perform custom actions after a successful payment, such as updating inventory or sending notifications."
      },
      {
        question: "Which hook is used to modify the product categories displayed in the admin product list?",
        options: ["woocommerce_product_categories_admin", "woocommerce_admin_product_categories", "woocommerce_product_cat_admin_list", "woocommerce_admin_product_term_list"],
        correctAnswer: "woocommerce_admin_product_term_list",
        explanation: "The 'woocommerce_admin_product_term_list' filter hook is used to modify the product categories displayed in the admin product list in WooCommerce. It allows developers to customize how categories are shown in the admin panel."
      },
      {
        question: "What is the purpose of the 'woocommerce_cart_shipping_packages' filter?",
        options: ["To add new shipping methods", "To modify shipping packages before calculations", "To change shipping rates", "To alter package dimensions"],
        correctAnswer: "To modify shipping packages before calculations",
        explanation: "The 'woocommerce_cart_shipping_packages' filter allows developers to modify the shipping packages before shipping calculations are performed in WooCommerce. This can be used to alter how products are grouped for shipping or to add custom data to the packages."
      },
      {
        question: "Which function is used to get the order shipping total in WooCommerce?",
        options: ["WC_Order::get_shipping_total()", "wc_get_order_shipping_total()", "get_post_meta($order_id, '_order_shipping', true)", "WC()->order->get_shipping()"],
        correctAnswer: "WC_Order::get_shipping_total()",
        explanation: "The 'get_shipping_total()' method of the WC_Order class is used to get the shipping total for a specific order in WooCommerce. It's called on an order object and returns the shipping total as a float."
      },
      {
        question: "What is the purpose of the 'woocommerce_get_order_item_totals' filter?",
        options: ["To change order status", "To modify order item total rows", "To add new product types", "To alter shipping calculations"],
        correctAnswer: "To modify order item total rows",
        explanation: "The 'woocommerce_get_order_item_totals' filter allows developers to modify the order item total rows that are displayed in emails and on the thank you page in WooCommerce. This can be used to add, remove, or alter the information shown in these totals."
      },
      {
        question: "Which hook is used to add custom bulk actions to the products list in WooCommerce admin?",
        options: ["woocommerce_product_bulk_actions", "woocommerce_bulk_product_actions", "woocommerce_admin_product_bulk_actions", "woocommerce_products_bulk_actions"],
        correctAnswer: "woocommerce_product_bulk_actions",
        explanation: "The 'woocommerce_product_bulk_actions' filter hook is used to add custom bulk actions to the products list in the WooCommerce admin panel. This allows developers to create new bulk actions for managing products."
      },
      {
        question: "What is the purpose of the 'woocommerce_get_price_excluding_tax' filter?",
        options: ["To change product prices", "To modify how prices excluding tax are calculated", "To add new tax rates", "To alter tax display settings"],
        correctAnswer: "To modify how prices excluding tax are calculated",
        explanation: "The 'woocommerce_get_price_excluding_tax' filter allows developers to modify how prices excluding tax are calculated in WooCommerce. This can be used to implement custom price calculations or adjustments when displaying prices without tax."
      },
      {
        question: "Which function is used to get the payment method title for an order in WooCommerce?",
        options: ["WC_Order::get_payment_method_title()", "wc_get_payment_method_title()", "get_post_meta($order_id, '_payment_method_title', true)", "WC()->order->get_payment_title()"],
        correctAnswer: "WC_Order::get_payment_method_title()",
        explanation: "The 'get_payment_method_title()' method of the WC_Order class is used to get the payment method title for a specific order in WooCommerce. It's called on an order object and returns the human-readable title of the payment method used."
      },
      {
        question: "What is the purpose of the 'woocommerce_continue_shopping_redirect' filter?",
        options: ["To change the shop page URL", "To modify the continue shopping redirect URL", "To alter product permalinks", "To change the cart URL"],
        correctAnswer: "To modify the continue shopping redirect URL",
        explanation: "The 'woocommerce_continue_shopping_redirect' filter allows developers to modify the URL that customers are redirected to when they click the 'Continue Shopping' button in WooCommerce. This can be used to customize the shopping flow."
      },
      {
        question: "Which hook is used to modify the product categories widget arguments in WooCommerce?",
        options: ["woocommerce_product_categories_widget_args", "woocommerce_widget_product_categories_args", "woocommerce_product_cat_widget_args", "woocommerce_categories_widget_args"],
        correctAnswer: "woocommerce_product_categories_widget_args",
        explanation: "The 'woocommerce_product_categories_widget_args' filter hook is used to modify the arguments passed to the product categories widget in WooCommerce. This allows developers to customize how product categories are displayed in the widget."
      },
      {
        question: "What is the purpose of the 'woocommerce_add_cart_item' filter?",
        options: ["To change product prices", "To modify cart item data when added to cart", "To add new products to the store", "To alter shipping calculations"],
        correctAnswer: "To modify cart item data when added to cart",
        explanation: "The 'woocommerce_add_cart_item' filter allows developers to modify the cart item data when a product is added to the cart in WooCommerce. This can be used to add custom data to cart items or alter their properties."
      },
      {
        question: "Which function is used to get the customer's shipping address in WooCommerce?",
        options: ["WC_Order::get_shipping_address()", "wc_get_order()->get_shipping_address()", "get_post_meta($order_id, '_shipping_address', true)", "WC()->customer->get_shipping_address()"],
        correctAnswer: "WC_Order::get_shipping_address()",
        explanation: "The 'get_shipping_address()' method of the WC_Order class is used to get the customer's shipping address for a specific order in WooCommerce. It's called on an order object and returns the formatted shipping address."
      },
      {
        question: "What is the purpose of the 'woocommerce_order_formatted_line_subtotal' filter?",
        options: ["To change order status", "To modify how order line subtotals are formatted", "To add new product types", "To alter tax calculations"],
        correctAnswer: "To modify how order line subtotals are formatted",
        explanation: "The 'woocommerce_order_formatted_line_subtotal' filter allows developers to modify how order line subtotals are formatted in WooCommerce. This can be used to customize the display of subtotals in order details and emails."
      },
      {
        question: "Which hook is used to add custom fields to the billing section of the checkout page?",
        options: ["woocommerce_billing_fields", "woocommerce_checkout_billing_fields", "woocommerce_after_checkout_billing_form", "woocommerce_billing_fields_custom"],
        correctAnswer: "woocommerce_billing_fields",
        explanation: "The 'woocommerce_billing_fields' filter hook is used to add custom fields to the billing section of the checkout page in WooCommerce. This allows developers to add additional fields to collect more information from customers during checkout."
      },
      {
        question: "What is the purpose of the 'woocommerce_get_catalog_ordering_args' filter?",
        options: ["To change product display order", "To modify catalog ordering arguments", "To add new sorting options", "To alter product query"],
        correctAnswer: "To modify catalog ordering arguments",
        explanation: "The 'woocommerce_get_catalog_ordering_args' filter allows developers to modify the arguments used for ordering products in the catalog in WooCommerce. This can be used to change the default sorting behavior or add custom sorting options."
      },
      {
        question: "Which function is used to get the order currency in WooCommerce?",
        options: ["WC_Order::get_currency()", "wc_get_order_currency()", "get_post_meta($order_id, '_order_currency', true)", "WC()->order->get_currency()"],
        correctAnswer: "WC_Order::get_currency()",
        explanation: "The 'get_currency()' method of the WC_Order class is used to get the currency for a specific order in WooCommerce. It's called on an order object and returns the currency code used for the order."
      },
      {
        question: "What is the purpose of the 'woocommerce_get_product_subcategories' filter?",
        options: ["To change category names", "To modify the list of product subcategories", "To add new categories", "To alter category hierarchy"],
        correctAnswer: "To modify the list of product subcategories",
        explanation: "The 'woocommerce_get_product_subcategories' filter allows developers to modify the list of product subcategories returned by WooCommerce. This can be used to customize which subcategories are displayed or to alter their order."
      },
      {
        question: "Which hook is used to modify the 'My Account' menu items in WooCommerce?",
        options: ["woocommerce_account_menu_items", "woocommerce_my_account_menu", "woocommerce_customer_menu_items", "woocommerce_account_navigation"],
        correctAnswer: "woocommerce_account_menu_items",
        explanation: "The 'woocommerce_account_menu_items' filter hook is used to modify the menu items displayed in the 'My Account' section of WooCommerce. This allows developers to add, remove, or reorder the navigation items in the customer account area."
      },
      {
        question: "What is the purpose of the 'woocommerce_admin_order_data_after_billing_address' action hook?",
        options: ["To change billing address", "To add content after billing address in admin", "To modify order data", "To alter shipping address"],
        correctAnswer: "To add content after billing address in admin",
        explanation: "The 'woocommerce_admin_order_data_after_billing_address' action hook allows developers to add custom content or fields after the billing address in the WooCommerce admin order details page."
      },
      {
        question: "Which function is used to get the product's stock quantity in WooCommerce?",
        options: ["WC_Product::get_stock_quantity()", "wc_get_product_stock()", "get_post_meta($product_id, '_stock', true)", "WC()->product->get_stock()"],
        correctAnswer: "WC_Product::get_stock_quantity()",
        explanation: "The 'get_stock_quantity()' method of the WC_Product class is used to get the stock quantity of a product in WooCommerce. It's called on a product object and returns the current stock level."
      },
      {
        question: "What is the purpose of the 'woocommerce_cart_item_quantity' filter?",
        options: ["To change product prices", "To modify how cart item quantities are displayed", "To add new products to cart", "To alter stock management"],
        correctAnswer: "To modify how cart item quantities are displayed",
        explanation: "The 'woocommerce_cart_item_quantity' filter allows developers to modify how cart item quantities are displayed in the cart and checkout pages of WooCommerce. This can be used to customize the quantity input field or its surrounding HTML."
      },
      {
        question: "Which hook is used to add custom fields to the shipping section of the checkout page?",
        options: ["woocommerce_shipping_fields", "woocommerce_checkout_shipping_fields", "woocommerce_after_checkout_shipping_form", "woocommerce_shipping_fields_custom"],
        correctAnswer: "woocommerce_shipping_fields",
        explanation: "The 'woocommerce_shipping_fields' filter hook is used to add custom fields to the shipping section of the checkout page in WooCommerce. This allows developers to collect additional shipping information from customers during checkout."
      },
      {
        question: "What is the purpose of the 'woocommerce_get_endpoint_url' filter?",
        options: ["To change product URLs", "To modify endpoint URLs in My Account", "To alter shop page URL", "To change checkout URL"],
        correctAnswer: "To modify endpoint URLs in My Account",
        explanation: "The 'woocommerce_get_endpoint_url' filter allows developers to modify the URLs for various endpoints in the WooCommerce My Account area. This can be used to customize the structure or content of these URLs."
      },
      {
        question: "Which function is used to get the order status in WooCommerce?",
        options: ["WC_Order::get_status()", "wc_get_order_status()", "get_post_status()", "WC()->order->status"],
        correctAnswer: "WC_Order::get_status()",
        explanation: "The 'get_status()' method of the WC_Order class is used to get the status of an order in WooCommerce. It's called on an order object and returns the current status of the order."
      },
      {
        question: "What is the purpose of the 'woocommerce_order_item_display_meta_key' filter?",
        options: ["To change order item names", "To modify how order item meta keys are displayed", "To add new meta data", "To alter product attributes"],
        correctAnswer: "To modify how order item meta keys are displayed",
        explanation: "The 'woocommerce_order_item_display_meta_key' filter allows developers to modify how order item meta keys are displayed in WooCommerce. This can be used to change the labels of meta data shown in order details and emails."
      },
      {
        question: "Which hook is used to modify the product data tabs on the single product page?",
        options: ["woocommerce_product_tabs", "woocommerce_product_data_tabs", "woocommerce_single_product_tabs", "woocommerce_modify_product_tabs"],
        correctAnswer: "woocommerce_product_tabs",
        explanation: "The 'woocommerce_product_tabs' filter hook is used to modify the product data tabs on the single product page in WooCommerce. This allows developers to add, remove, or alter the tabs and their content."
      },
      {
        question: "What is the purpose of the 'woocommerce_checkout_create_order' action hook?",
        options: ["To modify order data", "To trigger actions when an order is created", "To change checkout fields", "To alter payment gateways"],
        correctAnswer: "To trigger actions when an order is created",
        explanation: "The 'woocommerce_checkout_create_order' action hook is triggered when a new order is created during the checkout process in WooCommerce. It allows developers to perform custom actions or modify the order object at the point of creation."
      },
      {
        question: "Which function is used to get the product's regular price in WooCommerce?",
        options: ["WC_Product::get_regular_price()", "wc_get_regular_price()", "get_post_meta($product_id, '_regular_price', true)", "WC()->product->regular_price"],
        correctAnswer: "WC_Product::get_regular_price()",
        explanation: "The 'get_regular_price()' method of the WC_Product class is used to get the regular price of a product in WooCommerce. It's called on a product object and returns the regular price as set in the product data."
      },
      {
        question: "What is the purpose of the 'woocommerce_add_to_cart_redirect' filter?",
        options: ["To change add to cart button text", "To modify the redirect URL after adding to cart", "To alter product page URL", "To change cart page URL"],
        correctAnswer: "To modify the redirect URL after adding to cart",
        explanation: "The 'woocommerce_add_to_cart_redirect' filter allows developers to modify the URL that customers are redirected to after adding a product to their cart in WooCommerce. This can be used to customize the post-add-to-cart behavior."
      },
      {
        question: "Which hook is used to add content after the product summary on the single product page?",
        options: ["woocommerce_after_single_product_summary", "woocommerce_product_after_summary", "woocommerce_single_product_summary_end", "woocommerce_product_summary_after"],
        correctAnswer: "woocommerce_after_single_product_summary",
        explanation: "The 'woocommerce_after_single_product_summary' action hook is used to add content after the product summary on the single product page in WooCommerce. This allows developers to insert custom information or elements after the main product details."
      },
      {
        question: "What is the purpose of the 'woocommerce_package_rates' filter?",
        options: ["To change product rates", "To modify shipping rates for a package", "To alter tax rates", "To change currency rates"],
        correctAnswer: "To modify shipping rates for a package",
        explanation: "The 'woocommerce_package_rates' filter allows developers to modify the shipping rates for a package in WooCommerce. This can be used to add, remove, or alter shipping methods and their costs based on custom logic."
      },
      {
        question: "Which function is used to get the product's SKU in WooCommerce?",
        options: ["WC_Product::get_sku()", "wc_get_product_sku()", "get_post_meta($product_id, '_sku', true)", "WC()->product->sku"],
        correctAnswer: "WC_Product::get_sku()",
        explanation: "The 'get_sku()' method of the WC_Product class is used to get the SKU (Stock Keeping Unit) of a product in WooCommerce. It's called on a product object and returns the SKU if it has been set."
      },
      {
        question: "What is the purpose of the 'woocommerce_cart_item_removed' action hook?",
        options: ["To change cart totals", "To trigger actions when an item is removed from the cart", "To modify product data", "To alter shipping calculations"],
        correctAnswer: "To trigger actions when an item is removed from the cart",
        explanation: "The 'woocommerce_cart_item_removed' action hook is triggered when an item is removed from the cart in WooCommerce. It allows developers to perform custom actions or calculations when a product is removed from the cart."
      },
      {
        question: "Which hook is used to modify the product price display on shop and archive pages?",
        options: ["woocommerce_get_price_html", "woocommerce_price_html", "woocommerce_product_get_price", "woocommerce_formatted_price"],
        correctAnswer: "woocommerce_get_price_html",
        explanation: "The 'woocommerce_get_price_html' filter hook is used to modify how product prices are displayed on shop and archive pages in WooCommerce. This allows developers to customize the HTML structure and content of the price display."
      },
      {
        question: "What is the purpose of the 'woocommerce_coupon_get_discount_amount' filter?",
        options: ["To change coupon codes", "To modify the discount amount of a coupon", "To add new coupon types", "To alter coupon expiry dates"],
        correctAnswer: "To modify the discount amount of a coupon",
        explanation: "The 'woocommerce_coupon_get_discount_amount' filter allows developers to modify the discount amount calculated for a coupon in WooCommerce. This can be used to implement custom discount logic or adjust coupon values based on specific conditions."
      },
      {
        question: "Which function is used to get the product's sale price in WooCommerce?",
        options: ["WC_Product::get_sale_price()", "wc_get_sale_price()", "get_post_meta($product_id, '_sale_price', true)", "WC()->product->sale_price"],
        correctAnswer: "WC_Product::get_sale_price()",
        explanation: "The 'get_sale_price()' method of the WC_Product class is used to get the sale price of a product in WooCommerce. It's called on a product object and returns the sale price if it has been set."
      },
      {
        question: "What is the purpose of the 'woocommerce_product_get_rating_html' filter?",
        options: ["To change product ratings", "To modify how product ratings are displayed", "To add new rating systems", "To alter review management"],
        correctAnswer: "To modify how product ratings are displayed",
        explanation: "The 'woocommerce_product_get_rating_html' filter allows developers to modify how product ratings are displayed in WooCommerce. This can be used to customize the HTML structure and content of the rating stars or text."
      },
      {
        question: "Which hook is used to modify the related products output in WooCommerce?",
        options: ["woocommerce_related_products", "woocommerce_output_related_products", "woocommerce_product_related_products", "woocommerce_after_single_product_summary"],
        correctAnswer: "woocommerce_output_related_products",
        explanation: "The 'woocommerce_output_related_products' action hook is used to modify the output of related products in WooCommerce. Developers can use this hook to customize how related products are displayed on single product pages."
      },
      {
        question: "What is the purpose of the 'woocommerce_before_calculate_totals' action hook?",
        options: ["To change product prices", "To modify cart totals before calculation", "To add new products to cart", "To alter shipping methods"],
        correctAnswer: "To modify cart totals before calculation",
        explanation: "The 'woocommerce_before_calculate_totals' action hook is triggered before cart totals are calculated in WooCommerce. This allows developers to modify prices or perform custom calculations that will affect the final totals."
      },
      {
        question: "Which function is used to get the product categories in WooCommerce?",
        options: ["WC_Product::get_categories()", "wc_get_product_category_list()", "get_the_terms()", "WC()->product->get_categories()"],
        correctAnswer: "wc_get_product_category_list()",
        explanation: "The 'wc_get_product_category_list()' function is used to get the list of categories for a product in WooCommerce. It returns a formatted string of category links."
      },
      {
        question: "What is the purpose of the 'woocommerce_cart_item_price' filter?",
        options: ["To change product prices", "To modify how cart item prices are displayed", "To add new pricing rules", "To alter tax calculations"],
        correctAnswer: "To modify how cart item prices are displayed",
        explanation: "The 'woocommerce_cart_item_price' filter allows developers to modify how individual item prices are displayed in the cart in WooCommerce. This can be used to customize the price format or add additional information."
      },
      {
        question: "Which hook is used to add custom order statuses in WooCommerce?",
        options: ["woocommerce_register_order_status", "woocommerce_order_statuses", "woocommerce_add_order_status", "woocommerce_custom_order_status"],
        correctAnswer: "woocommerce_register_order_status",
        explanation: "The 'woocommerce_register_order_status' action hook is used to register custom order statuses in WooCommerce. This allows developers to add new statuses that can be assigned to orders."
      },
      {
        question: "What is the purpose of the 'woocommerce_product_get_weight' filter?",
        options: ["To change product weights", "To modify how product weights are retrieved", "To add new weight units", "To alter shipping calculations"],
        correctAnswer: "To modify how product weights are retrieved",
        explanation: "The 'woocommerce_product_get_weight' filter allows developers to modify the weight value retrieved for a product in WooCommerce. This can be used to adjust weights based on custom logic or data."
      },
      {
        question: "Which function is used to get the order items in WooCommerce?",
        options: ["WC_Order::get_items()", "wc_get_order_items()", "get_post_meta($order_id, '_order_items', true)", "WC()->order->get_items()"],
        correctAnswer: "WC_Order::get_items()",
        explanation: "The 'get_items()' method of the WC_Order class is used to get the items for a specific order in WooCommerce. It returns an array of order items, including products, fees, and shipping."
      },
      {
        question: "What is the purpose of the 'woocommerce_locate_template' filter?",
        options: ["To change template file locations", "To modify template content", "To add new templates", "To alter template hierarchy"],
        correctAnswer: "To change template file locations",
        explanation: "The 'woocommerce_locate_template' filter allows developers to modify the location of template files in WooCommerce. This can be used to override default templates with custom versions from different locations."
      },
      {
        question: "Which hook is used to modify the product thumbnails displayed on the single product page?",
        options: ["woocommerce_product_thumbnails", "woocommerce_single_product_image_thumbnail_html", "woocommerce_product_gallery_thumbnail", "woocommerce_single_product_thumbnails"],
        correctAnswer: "woocommerce_single_product_image_thumbnail_html",
        explanation: "The 'woocommerce_single_product_image_thumbnail_html' filter hook is used to modify the HTML for product thumbnails displayed on the single product page in WooCommerce."
      },
      {
        question: "What is the purpose of the 'woocommerce_checkout_coupon_message' filter?",
        options: ["To change coupon codes", "To modify the coupon form message on checkout", "To add new coupon types", "To alter coupon discounts"],
        correctAnswer: "To modify the coupon form message on checkout",
        explanation: "The 'woocommerce_checkout_coupon_message' filter allows developers to modify the message displayed above the coupon form on the checkout page in WooCommerce."
      },
      {
        question: "Which function is used to get the product's dimensions in WooCommerce?",
        options: ["WC_Product::get_dimensions()", "wc_get_product_dimensions()", "get_post_meta($product_id, '_dimensions', true)", "WC()->product->dimensions"],
        correctAnswer: "WC_Product::get_dimensions()",
        explanation: "The 'get_dimensions()' method of the WC_Product class is used to get the dimensions of a product in WooCommerce. It returns an array containing the length, width, and height of the product."
      },
      {
        question: "What is the purpose of the 'woocommerce_new_order_note_data' filter?",
        options: ["To change order statuses", "To modify data for new order notes", "To add custom order fields", "To alter order emails"],
        correctAnswer: "To modify data for new order notes",
        explanation: "The 'woocommerce_new_order_note_data' filter allows developers to modify the data used when creating a new order note in WooCommerce. This can be used to adjust the content or metadata of order notes."
      },
      {
        question: "Which hook is used to add content to the thank you page after order details in WooCommerce?",
        options: ["woocommerce_thankyou", "woocommerce_after_thankyou", "woocommerce_order_details_after_order_table", "woocommerce_thankyou_order_received_text"],
        correctAnswer: "woocommerce_thankyou",
        explanation: "The 'woocommerce_thankyou' action hook is used to add content to the thank you page after the order details in WooCommerce. It receives the order ID as a parameter."
      },
      {
        question: "What is the purpose of the 'woocommerce_order_get_tax_totals' filter?",
        options: ["To change tax rates", "To modify tax total calculations", "To add new tax classes", "To alter how tax totals are retrieved for an order"],
        correctAnswer: "To alter how tax totals are retrieved for an order",
        explanation: "The 'woocommerce_order_get_tax_totals' filter allows developers to modify how tax totals are retrieved and formatted for an order in WooCommerce. This can be used to customize the display of tax information."
      },
      {
        question: "Which function is used to get the product's purchase note in WooCommerce?",
        options: ["WC_Product::get_purchase_note()", "wc_get_purchase_note()", "get_post_meta($product_id, '_purchase_note', true)", "WC()->product->purchase_note"],
        correctAnswer: "WC_Product::get_purchase_note()",
        explanation: "The 'get_purchase_note()' method of the WC_Product class is used to get the purchase note of a product in WooCommerce. This note is displayed to the customer after purchasing the product."
      },
      {
        question: "What is the purpose of the 'woocommerce_hidden_order_itemmeta' filter?",
        options: ["To change order item names", "To modify hidden order item meta keys", "To add new meta data", "To alter product attributes"],
        correctAnswer: "To modify hidden order item meta keys",
        explanation: "The 'woocommerce_hidden_order_itemmeta' filter allows developers to modify the list of hidden order item meta keys in WooCommerce. Meta keys in this list will not be displayed in the order details."
      },
      {
        question: "Which hook is used to modify the product category archive title?",
        options: ["woocommerce_product_cat_title", "woocommerce_archive_title", "woocommerce_category_title", "woocommerce_show_page_title"],
        correctAnswer: "woocommerce_show_page_title",
        explanation: "The 'woocommerce_show_page_title' filter hook is used to modify the display of the page title, including product category archive titles, in WooCommerce. Developers can use this to customize or remove the title."
      },
      {
        question: "What is the purpose of the 'woocommerce_cart_calculate_fees' action hook?",
        options: ["To change product prices", "To modify shipping methods", "To add additional fees to the cart", "To alter tax calculations"],
        correctAnswer: "To add additional fees to the cart",
        explanation: "The 'woocommerce_cart_calculate_fees' action hook allows developers to add additional fees to the cart in WooCommerce. This can be used to include extra charges based on custom conditions."
      },
      {
        question: "Which function is used to get the product's stock status in WooCommerce?",
        options: ["WC_Product::get_stock_status()", "wc_get_product_stock_status()", "get_post_meta($product_id, '_stock_status', true)", "WC()->product->stock_status"],
        correctAnswer: "WC_Product::get_stock_status()",
        explanation: "The 'get_stock_status()' method of the WC_Product class is used to get the stock status of a product in WooCommerce. It returns whether the product is 'instock', 'outofstock', or 'onbackorder'."
      },
      {
        question: "What is the purpose of the 'woocommerce_email_order_meta_fields' filter?",
        options: ["To change email templates", "To modify order meta fields in emails", "To add new email types", "To alter email recipients"],
        correctAnswer: "To modify order meta fields in emails",
        explanation: "The 'woocommerce_email_order_meta_fields' filter allows developers to modify the order meta fields that are displayed in WooCommerce order emails. This can be used to add or remove information from these emails."
      },
      {
        question: "Which hook is used to modify the product data tabs on the single product page?",
        options: ["woocommerce_product_tabs", "woocommerce_default_product_tabs", "woocommerce_product_data_tabs", "woocommerce_single_product_tabs"],
        correctAnswer: "woocommerce_product_tabs",
        explanation: "The 'woocommerce_product_tabs' filter hook is used to modify the product data tabs on the single product page in WooCommerce. This allows developers to add, remove, or alter the tabs and their content."
      },
      {
        question: "What is the purpose of the 'woocommerce_order_status_changed' action hook?",
        options: ["To change order details", "To trigger actions when an order status changes", "To modify order emails", "To alter order items"],
        correctAnswer: "To trigger actions when an order status changes",
        explanation: "The 'woocommerce_order_status_changed' action hook is triggered when an order's status is changed in WooCommerce. It allows developers to perform custom actions based on the new status of the order."
      },
      {
        question: "Which function is used to get the product's attributes in WooCommerce?",
        options: ["WC_Product::get_attributes()", "wc_get_product_attributes()", "get_post_meta($product_id, '_product_attributes', true)", "WC()->product->attributes"],
        correctAnswer: "WC_Product::get_attributes()",
        explanation: "The 'get_attributes()' method of the WC_Product class is used to get the attributes of a product in WooCommerce. It returns an array of WC_Product_Attribute objects."
      },
      {
        question: "What is the purpose of the 'woocommerce_can_reduce_order_stock' filter?",
        options: ["To change stock quantities", "To modify stock reduction logic", "To add new stock management features", "To alter product inventory"],
        correctAnswer: "To modify stock reduction logic",
        explanation: "The 'woocommerce_can_reduce_order_stock' filter allows developers to modify the logic that determines whether an order can reduce product stock in WooCommerce. This can be used to implement custom stock management rules."
      },
      {
        question: "Which hook is used to add custom data to the cart item in WooCommerce?",
        options: ["woocommerce_add_cart_item_data", "woocommerce_cart_item_custom_data", "woocommerce_before_add_to_cart", "woocommerce_add_to_cart_validation"],
        correctAnswer: "woocommerce_add_cart_item_data",
        explanation: "The 'woocommerce_add_cart_item_data' filter hook is used to add custom data to the cart item when a product is added to the cart in WooCommerce. This data persists throughout the cart/checkout process."
      }
    //   {
    //     question: "What is the purpose of the 'woocommerce_get_price_suffix' filter?",
    //     options: ["To change product prices", "To modify the price suffix display", "To add new pricing rules", "To alter tax calculations"],
    //     correctAnswer: "To modify the price suffix display",
    //     explanation: "The 'woocommerce_get_price_suffix' filter allows developers to modify the price suffix displayed after product prices in WooCommerce. This can be used to customize the display of additional price information, such as 'inc. VAT' or 'ex. tax'."
    //   },
    //   {
    //     question: "Which function is used to get the order's payment method in WooCommerce?",
    //     options: ["WC_Order::get_payment_method()", "wc_get_order_payment_method()", "get_post_meta($order_id, '_payment_method', true)", "WC()->order->payment_method"],
    //     correctAnswer: "WC_Order::get_payment_method()",
    //     explanation: "The 'get_payment_method()' method of the WC_Order class is used to get the payment method for a specific order in WooCommerce. It returns the ID of the payment method used for the order."
    //   },
    //   {
    //     question: "What is the purpose of the 'woocommerce_admin_order_actions' filter?",
    //     options: ["To change order statuses", "To modify admin order actions", "To add custom order fields", "To alter order emails"],
    //     correctAnswer: "To modify admin order actions",
    //     explanation: "The 'woocommerce_admin_order_actions' filter allows developers to modify the action buttons displayed for each order in the WooCommerce admin orders list. This can be used to add, remove, or alter these action buttons."
    //   }
    // Add more questions to reach at least 30 for variety
  ];