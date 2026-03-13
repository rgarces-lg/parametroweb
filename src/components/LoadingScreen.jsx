import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    "Iniciando Motor Paramétrico...",
    "Calculando TIR...",
    "Evaluando Absorción...",
    "Generando Proforma...",
    "Optimizando Coeficientes...",
    "Validando Uso de Suelo...",
    "Arquitectura Financiera Lista."
  ];

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 400); // Fast iteration for technical feel
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 800);
      return () => clearTimeout(exitTimer);
    }
  }, [currentStep, steps.length]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-brand-black flex flex-col items-center justify-center p-6 font-mono"
        >
          <div className="max-w-md w-full">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-500 text-sm ml-2">terminal — parametro_v2.0</span>
            </div>
            
            <div className="space-y-2">
              {steps.slice(0, currentStep + 1).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-brand-emerald">{'>'}</span>
                  <span className={index === currentStep ? "text-white" : "text-gray-400"}>
                    {step}
                    {index === currentStep && currentStep < steps.length - 1 && (
                      <motion.span
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                        className="inline-block w-2 h-5 bg-brand-emerald ml-2 align-middle"
                      />
                    )}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 w-full bg-gray-800 h-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                className="h-full bg-brand-emerald shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
