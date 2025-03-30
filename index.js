class Formatter {
  //add static methods here


    // Capitalize first letter of a string
    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    // Remove non-alphanumeric characters except dashes, single quotes, and spaces
    static sanitize(str) {
      return str.replace(/[^a-zA-Z0-9-' ]/g, '');
    }
  
    // Capitalize all words except small words, but always capitalize the first word
    static titleize(sentence) {
      const smallWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
      return sentence
        .split(" ")
        .map((word, index) => 
          index === 0 || !smallWords.includes(word) ? this.capitalize(word) : word
        )
        .join(" ");
    }
  }
  
