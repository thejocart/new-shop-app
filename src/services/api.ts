import { Product } from "../types/Product";

const API_URL = "https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/`);
  console.log(API_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// export const fetchProducts = async (): Promise<Product[]> => {
//   // Mock data, simulating a product API response
//   const mockProducts: Product[] = [
//     {
//       id: 1,
//       name: "Wireless Mouse",
//       price: 25.99,
//       description:
//         "A sleek wireless mouse with ergonomic design and high precision.",
//       features: [
//         "Ergonomic design for comfortable use",
//         "2.4GHz wireless connection",
//         "1600 DPI high precision sensor",
//         "Battery life up to 12 months",
//       ],
//       specifications: {
//         DPI: 1600,
//         ConnectionType: "Wireless",
//         OperatingRange: "10 meters",
//         Battery: "1 x AA",
//         Dimensions: "4.4 x 2.5 x 1.5 inches",
//         Weight: "3.2 ounces",
//         Compatibility: ["Windows", "macOS", "Linux"],
//       },
//       additionalInformation: {
//         Warranty: "1-year limited warranty",
//         "In the Box": ["Wireless Mouse", "USB Receiver", "1 x AA Battery"],
//       },
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: "Gaming Keyboard",
//       price: 49.99,
//       description:
//         "RGB mechanical keyboard with customizable lighting and macro keys.",
//       features: [
//         "Mechanical keys with tactile feedback",
//         "Customizable RGB lighting",
//         "6 programmable macro keys",
//         "USB pass-through port",
//       ],
//       specifications: {
//         DPI: 0, // Replaced null with a numeric default
//         ConnectionType: "Wired",
//         OperatingRange: "N/A", // Replaced null with "N/A"
//         Battery: "None", // Replaced null with "None"
//         Dimensions: "18.5 x 6.5 x 1.8 inches",
//         Weight: "2.3 pounds",
//         Compatibility: ["Windows", "macOS"],
//       },
//       additionalInformation: {
//         Warranty: "2-year limited warranty",
//         "In the Box": ["Gaming Keyboard", "User Manual"],
//       },
//       quantity: 1,
//     },
//     {
//       id: 3,
//       name: "Wireless Charging Pad",
//       price: 19.99,
//       description:
//         "Fast wireless charging pad compatible with most Qi-enabled devices.",
//       features: [
//         "Supports fast charging up to 15W",
//         "Sleek and compact design",
//         "LED indicator for charging status",
//       ],
//       specifications: {
//         DPI: 0,
//         ConnectionType: "Wireless",
//         OperatingRange: "Up to 5mm (charging range)",
//         Battery: "None",
//         Dimensions: "3.5 x 3.5 x 0.3 inches",
//         Weight: "4.0 ounces",
//         Compatibility: ["Qi-enabled devices"],
//       },
//       additionalInformation: {
//         Warranty: "1-year limited warranty",
//         "In the Box": ["Wireless Charging Pad", "USB-C Cable"],
//       },
//       quantity: 1,
//     },
//     {
//       id: 4,
//       name: "Bluetooth Headset",
//       price: 59.99,
//       description: "Noise-canceling Bluetooth headset for clear communication.",
//       features: [
//         "Active noise cancellation",
//         "20-hour battery life",
//         "Wireless Bluetooth 5.0 connectivity",
//         "Built-in microphone",
//       ],
//       specifications: {
//         DPI: 0,
//         ConnectionType: "Bluetooth",
//         OperatingRange: "10 meters",
//         Battery: "Rechargeable",
//         Dimensions: "7.0 x 6.0 x 3.0 inches",
//         Weight: "8.0 ounces",
//         Compatibility: ["Windows", "macOS", "Linux", "Android", "iOS"],
//       },
//       additionalInformation: {
//         Warranty: "2-year limited warranty",
//         "In the Box": ["Bluetooth Headset", "Charging Cable", "User Manual"],
//       },
//       quantity: 1,
//     },
//     {
//       id: 5,
//       name: "Ergonomic Mouse Pad",
//       price: 9.99,
//       description:
//         "Mouse pad with ergonomic wrist support for comfortable use.",
//       features: [
//         "Memory foam wrist rest",
//         "Non-slip base",
//         "Smooth surface for precise tracking",
//       ],
//       specifications: {
//         DPI: 0,
//         ConnectionType: "N/A",
//         OperatingRange: "N/A",
//         Battery: "None",
//         Dimensions: "9.8 x 8.6 x 0.5 inches",
//         Weight: "6.0 ounces",
//         Compatibility: ["All mice"],
//       },
//       additionalInformation: {
//         Warranty: "1-year limited warranty",
//         "In the Box": ["Ergonomic Mouse Pad"],
//       },
//       quantity: 1,
//     },
//     {
//       id: 6,
//       name: "USB-C Hub",
//       price: 29.99,
//       description:
//         "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
//       features: [
//         "4K HDMI output",
//         "3 x USB 3.0 ports",
//         "SD and MicroSD card reader",
//         "USB-C power delivery pass-through",
//       ],
//       specifications: {
//         DPI: 0,
//         ConnectionType: "USB-C",
//         OperatingRange: "N/A",
//         Battery: "None",
//         Dimensions: "4.0 x 1.5 x 0.5 inches",
//         Weight: "2.5 ounces",
//         Compatibility: ["USB-C devices"],
//       },
//       additionalInformation: {
//         Warranty: "2-year limited warranty",
//         "In the Box": ["USB-C Hub", "User Manual"],
//       },
//       quantity: 1,
//     },
//     {
//       id: 7,
//       name: "External Hard Drive",
//       price: 89.99,
//       description: "1TB external hard drive with USB 3.0 connectivity.",
//       features: [
//         "1TB storage capacity",
//         "USB 3.0 high-speed data transfer",
//         "Portable and compact design",
//       ],
//       specifications: {
//         DPI: 0,
//         ConnectionType: "USB 3.0",
//         OperatingRange: "N/A",
//         Battery: "None",
//         Dimensions: "4.6 x 3.1 x 0.8 inches",
//         Weight: "5.3 ounces",
//         Compatibility: ["Windows", "macOS"],
//       },
//       additionalInformation: {
//         Warranty: "3-year limited warranty",
//         "In the Box": ["External Hard Drive", "USB 3.0 Cable"],
//       },
//       quantity: 1,
//     },
//     {
//       id: 8,
//       name: "Wireless Presentation Remote",
//       price: 14.99,
//       description: "Wireless remote with laser pointer for presentations.",
//       features: [
//         "2.4GHz wireless connection",
//         "Laser pointer",
//         "Plug-and-play with USB receiver",
//       ],
//       specifications: {
//         DPI: 0,
//         ConnectionType: "Wireless",
//         OperatingRange: "15 meters",
//         Battery: "2 x AAA",
//         Dimensions: "5.0 x 1.5 x 0.8 inches",
//         Weight: "3.0 ounces",
//         Compatibility: ["Windows", "macOS", "Linux"],
//       },
//       additionalInformation: {
//         Warranty: "1-year limited warranty",
//         "In the Box": [
//           "Presentation Remote",
//           "USB Receiver",
//           "2 x AAA Batteries",
//         ],
//       },
//       quantity: 1,
//     },
//     {
//       id: 9,
//       name: "USB Webcam",
//       price: 39.99,
//       description:
//         "1080p HD USB webcam with built-in microphone and autofocus.",
//       features: [
//         "1080p full HD resolution",
//         "Built-in microphone",
//         "Autofocus and low-light correction",
//       ],
//       specifications: {
//         DPI: 0,
//         ConnectionType: "USB",
//         OperatingRange: "N/A",
//         Battery: "None",
//         Dimensions: "2.0 x 3.0 x 1.2 inches",
//         Weight: "2.0 ounces",
//         Compatibility: ["Windows", "macOS", "Linux"],
//       },
//       additionalInformation: {
//         Warranty: "1-year limited warranty",
//         "In the Box": ["USB Webcam", "User Manual"],
//       },
//       quantity: 1,
//     },
//     {
//       id: 10,
//       name: "Portable Laptop Stand",
//       price: 29.99,
//       description:
//         "Adjustable portable laptop stand for ergonomic viewing angles.",
//       features: [
//         "Adjustable height and angle",
//         "Foldable and portable design",
//         "Non-slip rubber pads for stability",
//       ],
//       specifications: {
//         DPI: 0,
//         ConnectionType: "N/A",
//         OperatingRange: "N/A",
//         Battery: "None",
//         Dimensions: "10.0 x 9.5 x 1.0 inches (folded)",
//         Weight: "1.2 pounds",
//         Compatibility: ["All laptops up to 17 inches"],
//       },
//       additionalInformation: {
//         Warranty: "2-year limited warranty",
//         "In the Box": ["Laptop Stand", "Carrying Case"],
//       },
//       quantity: 1,
//     },
//   ];

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockProducts);
//     }, 1000); // Simulate network delay of 1 second
//   });
// };
