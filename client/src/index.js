const React = require("react");
const ReactDOM = require("react-dom"); 

const ProductListing = () => {
    return (
    React.createElement("div", {
        className: "product-listing",
        children: [
            React.createElement("h2", null, "Products"),
            React.createElement("ul", {
                className: "product",
                children: [Product({title: "Amazon Kindle E-reader", price: "$79.99", quantity: "5"}),
                Product({title: "Apple", price: "$649", quantity: "2"}),
                Product({title: "Yamaha", price: "$155", quantity: "0"})]
            })
        ]
    }
    )
    )
} 

const Product = ({title, price, quantity}) => {
    return (
        React.createElement("li", {
            className: "product",
            children: [
                React.createElement("div", {
                    className: "product-details",
                    children: [
                        React.createElement("h3", null, title),
                        React.createElement("p", {
                            className: "price"
                        }, price),
                        React.createElement("p", {
                            className: "quantity"
                        }, `${quantity} left in stock`),
                        React.createElement("div", {
                            className: "actions product-actions",
                            children: [
                                React.createElement("button",{
                                    className: "add-to-cart"
                                }, "Add to Cart"
                                ),
                                React.createElement("button",{
                                    className: "edit"
                                }, "Edit"
                                )
                            ]
                        }, )
                    ]
                })
            ]
        })
    )
}

const App = () => {
    return (
        // React.createElement("h1", null, "TITLE")
        // React.createElement("ul", {
        //     children: [Product({title: "Amazon Kindle E-reader", price: "$79.99", quantity: "5"}),
        //     Product({title: "Apple", price: "$649", quantity: "2"}),
        //     Product({title: "Yamaha", price: "$155", quantity: "0"})]
        // })
        ProductListing()
    )
}

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(App());