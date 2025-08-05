"use client";

import { useState } from "react";
import { Step1 } from "./_components/step1";
import { Success } from "./_components/success";

export default function Page() {
  const [step, setStep] = useState(1);
  return (
    <div className="my-8 flex items-center justify-center">
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Success setStep={setStep} />}
    </div>
  );
}
