const text = document.querySelector('.text');

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split = splitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {
		opacity: 0,
		scale: .1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.02,
		repeat: 0,
	})
});


{/* <div class="text">Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Что рекламных пор заманивший
		выйти, ручеек вопроса наш своего рот толку знаках составитель свой меня она дороге продолжил свою рыбными мир своих
		свое по всей одна всемогущая рукопись злых курсивных? Которое агентство бросил, переписывается если даль продолжил
		свой большого мир своих?
</div> */}