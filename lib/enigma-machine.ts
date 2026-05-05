// Enigma rotor wirings (historical accuracy)
export const ROTORS = {
  I: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
  II: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
  III: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
  IV: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
  V: "VZBRGITYUPSDNHLXAWMJQOFECK",
  VI: "JPGVOUMFYQBENHZRDKASXLICTW",
  VII: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
  VIII: "FKQHTLXOCBJSPDZRAMEWNIUYGV",
};

export const REFLECTORS = {
  B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
  C: "FVPJIAOYEDRZXWGCTKUQSBNMHL",
};

export const NOTCHES = {
  I: 16,
  II: 4,
  III: 21,
  IV: 9,
  V: 25,
  VI: 25,
  VII: 25,
  VIII: 25,
};

interface EnigmaSettings {
  model: "M3" | "M4";
  reflector: "B" | "C";
  leftRotor: keyof typeof ROTORS;
  middleRotor: keyof typeof ROTORS;
  rightRotor: keyof typeof ROTORS;
  leftRing: number;
  middleRing: number;
  rightRing: number;
  leftPosition: number;
  middlePosition: number;
  rightPosition: number;
  plugboard: { [key: string]: string };
}

export class EnigmaMachine {
  private settings: EnigmaSettings;
  private rotorStates: number[] = [];

  constructor(settings: EnigmaSettings) {
    this.settings = settings;
    this.rotorStates = [settings.leftPosition, settings.middlePosition, settings.rightPosition];
  }

  private getRotorWiring(rotor: keyof typeof ROTORS): string {
    return ROTORS[rotor];
  }

  private stepRotors(): void {
    const rightNotch = NOTCHES[this.settings.rightRotor];
    const middleNotch = NOTCHES[this.settings.middleRotor];

    // Right rotor always steps
    if (this.rotorStates[2] === rightNotch) {
      // Double-stepping of middle rotor
      this.rotorStates[1] = (this.rotorStates[1] + 1) % 26;
    }

    if (this.rotorStates[1] === middleNotch) {
      this.rotorStates[0] = (this.rotorStates[0] + 1) % 26;
    }

    this.rotorStates[2] = (this.rotorStates[2] + 1) % 26;
  }

  private applyPlugboard(letter: string): string {
    return this.settings.plugboard[letter] || letter;
  }

  private reversePlugboard(letter: string): string {
    for (const [from, to] of Object.entries(this.settings.plugboard)) {
      if (to === letter) return from;
    }
    return letter;
  }

  private encodeCharacter(char: string): string {
    if (!/[A-Z]/.test(char)) return char;

    // Step rotors before encoding
    this.stepRotors();

    // Apply plugboard
    let letter = this.applyPlugboard(char);

    // Right rotor forward
    const rightWiring = this.getRotorWiring(this.settings.rightRotor);
    const rightIndex = (char.charCodeAt(0) - 65 + this.rotorStates[2]) % 26;
    letter = String.fromCharCode(((rightWiring.charCodeAt(rightIndex) - 65 - this.rotorStates[2] + 26) % 26) + 65);

    // Middle rotor forward
    const middleWiring = this.getRotorWiring(this.settings.middleRotor);
    const middleIndex = (letter.charCodeAt(0) - 65 + this.rotorStates[1]) % 26;
    letter = String.fromCharCode(((middleWiring.charCodeAt(middleIndex) - 65 - this.rotorStates[1] + 26) % 26) + 65);

    // Left rotor forward
    const leftWiring = this.getRotorWiring(this.settings.leftRotor);
    const leftIndex = (letter.charCodeAt(0) - 65 + this.rotorStates[0]) % 26;
    letter = String.fromCharCode(((leftWiring.charCodeAt(leftIndex) - 65 - this.rotorStates[0] + 26) % 26) + 65);

    // Reflector
    const reflector = this.settings.reflector === "B" ? REFLECTORS.B : REFLECTORS.C;
    letter = reflector[letter.charCodeAt(0) - 65];

    // Left rotor backward
    const leftBackIndex = leftWiring.indexOf(String.fromCharCode((letter.charCodeAt(0) - 65 + this.rotorStates[0]) % 26 + 65));
    letter = String.fromCharCode(((leftBackIndex - this.rotorStates[0] + 26) % 26) + 65);

    // Middle rotor backward
    const middleBackIndex = middleWiring.indexOf(String.fromCharCode((letter.charCodeAt(0) - 65 + this.rotorStates[1]) % 26 + 65));
    letter = String.fromCharCode(((middleBackIndex - this.rotorStates[1] + 26) % 26) + 65);

    // Right rotor backward
    const rightBackIndex = rightWiring.indexOf(String.fromCharCode((letter.charCodeAt(0) - 65 + this.rotorStates[2]) % 26 + 65));
    letter = String.fromCharCode(((rightBackIndex - this.rotorStates[2] + 26) % 26) + 65);

    // Apply plugboard return
    return this.reversePlugboard(letter);
  }

  process(input: string): string {
    let output = "";
    for (const char of input) {
      if (/[A-Z]/.test(char)) {
        output += this.encodeCharacter(char);
      } else {
        output += char;
      }
    }
    return output;
  }

  getState() {
    return {
      leftPosition: this.rotorStates[0],
      middlePosition: this.rotorStates[1],
      rightPosition: this.rotorStates[2],
    };
  }
}
