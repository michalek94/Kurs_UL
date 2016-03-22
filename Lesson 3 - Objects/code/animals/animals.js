(function (global) {
	var Cat = null, Bird = null, Worm = null;
    
    var Animal = {
        eat: function (obj) {
            
            if(this.eaten.some(function(el){
                return Object.getPrototypeOf(obj) == Object.getPrototypeOf(el);
            })){
                return "Mniam!";
            }else{
                return "Blee!";
            }
        }
    };

	if (!global.UAM) {
		global.UAM = {};
	}
    
    Worm = Object.create(Animal);
    Worm.eaten = [];
    
    Bird = Object.create(Animal);
    Bird.eaten = [];
    
    Cat = Object.create(Animal);
    Cat.eaten = [];    
    
    Cat.eaten.push(Object.create(Bird));
    Bird.eaten.push(Object.create(Worm));

	global.UAM.Cat = Cat;
	global.UAM.Bird = Bird;
	global.UAM.Worm = Worm;

}(window));

/*
	W zadaniu mamy 3 rodzaje zwierząt: koty, ptaki i robaki. Respektując prawa natury koty jedzą ptaki, a ptaki robaki.
	Zaimplementuj obiekty Cat, Bird i Worm tak, aby poniższy kod zwracał prawidłowe rezultaty:

	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"

	Dodatkowo wszystkie obiekty mają korzystać ze wspólnej metody eat.
*/


