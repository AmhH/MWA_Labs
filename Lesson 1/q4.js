'use strict';
class BMICalculator{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    calculateBMIMetric() {
        const result = (weight.value) / Math.pow(height.value, 2);
        return result;
    }
    calculateBMIEnglish() {
        const result = ((weight.value) / Math.pow((height.value * 12), 2)) * 703.0704;
        return result;
    }
    satus(value) {
        if (value < 18.5) {
            return "Under weight";
        }
        else if (value >= 18.5 && value < 24.9) {
            return "Normal / Healthy";
        }
        else if (value = 25 && value < 29.9) {
            return "Over weight";
        } else {
            return "Obese";
        }
    }
}

window.onload = function (){
    document.getElementById('calculate').addEventListener('click', function(){
        let method = document.querySelector('input[name = "unit"]:checked');
        let h = document.getElementById("height").value;
        let w = document.getElementById("weight").value;
        let output = document.getElementById("output");
        if(!method){
           document.getElementById("info").innerHTML = "Select Metric or English";
        } else {
            let evaluate = new BMICalculator(h, w);
            if (method.value === "metric") {
                const res = evaluate.calculateBMIMetric();
                output.innerHTML = `Your BMI value = ${res} , status : ${evaluate.satus(res)} `;
            } else if (method.value === "english") {
                const res = evaluate.calculateBMIEnglish();
                output.innerHTML = `Your BMI value = ${res} , status : ${evaluate.satus(res)} `;
            }
        } 
    })
};