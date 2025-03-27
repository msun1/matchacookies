import React, { useState, useRef } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { CheckCircle, Cookie } from "lucide-react";
import clickSound from "./assets/click.wav";
import './MatchaCookie.css';

export default function MatchaCookieRecipe() {
  const [showSteps, setShowSteps] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState([]);
  const [servings, setServings] = useState(1);
  const audioRef = useRef(null);

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play();
    }
  };

  const toggleStep = (index) => {
    playClickSound();
    setCheckedSteps((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleShowSteps = () => {
    playClickSound();
    setShowSteps(!showSteps);
  };

  const handleServingsChange = (e) => {
    playClickSound();
    setServings(Number(e.target.value));
  };

  return (
    <div className="recipe-container">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={clickSound} />

      <h1 className="title">🍵 White Chocolate Matcha Cookies 🍪</h1>

      <Card>
        <CardContent>
          <h2 className="ingredients-title">Ingredients</h2>

          <div className="servings-container">
            <label className="servings-label">Servings:</label>
            <input
              type="range"
              min="1"
              max="4"
              value={servings}
              onChange={handleServingsChange}
              className="servings-range"
            />
            <span className="servings-value">x{servings}</span>
          </div>

          <ul className="ingredients-list">
            {ingredients.map((ing, index) => (
              <li key={index}>
                {(ing.amount * servings).toFixed(2)} {ing.unit} {ing.item}
              </li>
            ))}
          </ul>

          <Button onClick={handleShowSteps}>
            {showSteps ? "Hide Instructions" : "Show Instructions"}
          </Button>

          {showSteps && (
            <ol className="steps-list">
              {steps.map((step, index) => (
                <li key={index} className="step-item">
                  <input
                    type="checkbox"
                    checked={checkedSteps.includes(index)}
                    onChange={() => toggleStep(index)}
                    className="step-checkbox"
                  />
                  <span className={checkedSteps.includes(index) ? "checked-step" : ""}>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </CardContent>
      </Card>

      <div className="completion-message">
        <CheckCircle color="#10b981" />
        <p>Easy, Yummy & Cute!</p>
      </div>

      <div>
        <Cookie className="cookie-icon" size={36} />
      </div>
    </div>
  );
}

// Ingredient and steps data (keep the same as in previous version)
const ingredients = [
  { item: "All-purpose flour", amount: 1.75, unit: "cups" },
  { item: "Matcha powder", amount: 1, unit: "tbsp" },
  { item: "Baking soda", amount: 0.5, unit: "tsp" },
  { item: "Salt", amount: 0.25, unit: "tsp" },
  { item: "Vegetable oil", amount: 0.33, unit: "cup" },
  { item: "Honey", amount: 0.33, unit: "cup" },
  { item: "Egg", amount: 1, unit: "" },
  { item: "Vanilla extract", amount: 1, unit: "tsp" },
  { item: "White chocolate chips", amount: 0.5, unit: "cup" },
];

const steps = [
  "Preheat oven to 350°F (175°C).",
  "Mix dry ingredients: flour, matcha powder, baking soda, salt.",
  "Mix wet ingredients: oil, honey, egg, vanilla.",
  "Combine wet and dry ingredients, then fold in chocolate chips.",
  "Chill dough (optional) for 15-20 minutes.",
  "Scoop onto baking sheet & bake for 9-11 minutes.",
  "Cool for 5 minutes & enjoy! 🍪",
];

// import React, { useState } from "react
// import { Card, CardContent } from "./components/ui/card.jsx";
// import { Button } from "./components/ui/button";
// import { CheckCircle, Cookie } from "lucide-react";
// import { motion } from "framer-motion";
// import useSound from "use-sound";
// import clickSound from "/src/assets/click.wav";
// import "@fontsource/caveat/400.css";

// export default function MatchaCookieRecipe() {
//   const [showSteps, setShowSteps] = useState(false);
//   const [checkedSteps, setCheckedSteps] = useState([]);
//   const [servings, setServings] = useState(1);
//   const [play] = useSound(clickSound, { volume: 0.5 });

//   const ingredients = [
//     { item: "All-purpose flour", amount: 1.75, unit: "cups" },
//     { item: "Matcha powder", amount: 1, unit: "tbsp" },
//     { item: "Baking soda", amount: 0.5, unit: "tsp" },
//     { item: "Salt", amount: 0.25, unit: "tsp" },
//     { item: "Vegetable oil", amount: 0.33, unit: "cup" },
//     { item: "Honey", amount: 0.33, unit: "cup" },
//     { item: "Egg", amount: 1, unit: "" },
//     { item: "Vanilla extract", amount: 1, unit: "tsp" },
//     { item: "White chocolate chips", amount: 0.5, unit: "cup" },
//   ];

//   const steps = [
//     "Preheat oven to 350°F (175°C).",
//     "Mix dry ingredients: flour, matcha powder, baking soda, salt.",
//     "Mix wet ingredients: oil, honey, egg, vanilla.",
//     "Combine wet and dry ingredients, then fold in chocolate chips.",
//     "Chill dough (optional) for 15-20 minutes.",
//     "Scoop onto baking sheet & bake for 9-11 minutes.",
//     "Cool for 5 minutes & enjoy! 🍪",
//   ];

//   const toggleStep = (index) => {
//     play();
//     setCheckedSteps((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-green-50 bg-[url('https://www.transparenttextures.com/patterns/polka-dot.png')] flex flex-col items-center p-6 font-[Caveat]">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-5xl font-bold text-green-700 mb-4"
//       >
//         🍵 White Chocolate Matcha Cookies 🍪
//       </motion.h1>

//       <Card className="w-full max-w-xl p-4 bg-white shadow-xl rounded-2xl">
//         <CardContent>
//           <h2 className="text-3xl font-semibold mb-4 text-green-600 text-center">Ingredients</h2>

//           <div className="flex items-center gap-4 mb-6">
//             <label className="text-gray-700 text-lg">Servings:</label>
//             <input
//               type="range"
//               min="1"
//               max="4"
//               value={servings}
//               onChange={(e) => setServings(Number(e.target.value))}
//               className="w-full accent-green-500"
//             />
//             <span className="font-medium text-green-700 text-lg">x{servings}</span>
//           </div>

//           <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
//             {ingredients.map((ing, index) => (
//               <li key={index}>
//                 {(ing.amount * servings).toFixed(2)} {ing.unit} {ing.item}
//               </li>
//             ))}
//           </ul>

//           <Button
//             onClick={() => setShowSteps(!showSteps)}
//             className="w-full bg-green-400 hover:bg-green-500 text-white text-xl rounded-xl"
//           >
//             {showSteps ? "Hide Instructions" : "Show Instructions"}
//           </Button>

//           {showSteps && (
//             <motion.ol
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="list-decimal list-inside mt-6 space-y-4 text-gray-700 text-lg"
//             >
//               {steps.map((step, index) => (
//                 <li key={index} className="flex items-start gap-2">
//                   <input
//                     type="checkbox"
//                     checked={checkedSteps.includes(index)}
//                     onChange={() => toggleStep(index)}
//                     className="mt-1 accent-green-500"
//                   />
//                   <span className={checkedSteps.includes(index) ? "line-through text-gray-400" : ""}>{step}</span>
//                 </li>
//               ))}
//             </motion.ol>
//           )}
//         </CardContent>
//       </Card>

//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="mt-8 flex items-center gap-2"
//       >
//         <CheckCircle className="text-green-500" />
//         <p className="text-green-700 font-medium text-xl">Easy, Yummy & Cute!</p>
//       </motion.div>

//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.8 }}
//         className="mt-4"
//       >
//         <Cookie className="text-yellow-500 animate-bounce" size={36} />
//       </motion.div>
//     </div>
//   );
// }
