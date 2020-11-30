let credits = 23580;
const pricePerDropd = 3000;
let namberDroids = prompt("Какое количество дроидов вы хотите купить ?");
const totalPrice = pricePerDropd * namberDroids;
const canslButn = "Отменено пользователем!"
 
if (namberDroids === null) { alert ("Отменено пользователем!") }

else if (totalPrice <= credits) { credits -= totalPrice; alert(`Вы купили ${namberDroids} дроидов, на счету осталось ${credits} кредитов.`); } 

else if (totalPrice > credits) { alert("Недостаточно средств на счету!"); }
    



    
