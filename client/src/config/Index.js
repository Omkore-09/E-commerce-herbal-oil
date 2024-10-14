

export const registerFormControls = [
    {
        name : 'userName',
        label : 'User Name',
        placeholder : 'Enter your user name',
        componentType : 'input',
        type : 'text',

    },
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',

    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password',

    }
]

export const loginFormControls = [
    
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',

    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password',

    }
];


export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];
  
  export const shoppingViewHeaderMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/shop/home",
    },
    {
        id: "aboutus",
        label: "About Us",
        path: "/shop/listing",
    },
    {
      id: "products",
      label: "Products",
      path: "/shop/listing",
    },
    
    {
      id: "product-benifits",
      label: "Product Benifits",
      path: "/shop/product-benifits",
    },
    {
      id: "ingredients",
      label: "Ingredients",
      path: "/shop/ingredients",
    },
    {
      id: "contact-us",
      label: "Contact Us",
      path: "/shop/conatct-us",
    },
    {
      id: "search",
      label: "Search",
      path: "/shop/search",
    },
  ];
  


  export const addressFormControls = [
    {
      label: "Address",
      name: "address",
      componentType: "input",
      type: "text",
      placeholder: "Enter your address",
    },
    {
      label: "City",
      name: "city",
      componentType: "input",
      type: "text",
      placeholder: "Enter your city",
    },
    {
      label: "Pincode",
      name: "pincode",
      componentType: "input",
      type: "text",
      placeholder: "Enter your pincode",
    },
    {
      label: "Phone",
      name: "phone",
      componentType: "input",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      label: "Notes",
      name: "notes",
      componentType: "textarea",
      placeholder: "Enter any additional notes",
    },
  ];