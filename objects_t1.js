const object = {
  time : 2000,
  pets : ['Cat', 'Dog', 'Monkey', 'Giraffe'],
  print : function() {
      setTimeout(function() {
      for (const pet of this.pets) {
          console.log(pet.toUpperCase());
        }
      }.bind(this), this.time);
    }
}

const object2 = {
  time : 2000,
  pets : ['Cat', 'Dog', 'Monkey', 'Giraffe'],
  print : function() {
    const self = this;

    setTimeout(function() {
      for (const pet of self.pets) {
        console.log(pet.toUpperCase());
      }
    }, this.time);
  }
}


const object3 = {
  time : 2000,
  pets : ['Cat', 'Dog', 'Monkey', 'Giraffe'],
  print : function() {
    setTimeout(() => {
      for (const pet of this.pets) {
        console.log(pet.toUpperCase());
      }
    }, this.time);
  }
}
