class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(other) {
    return new Complex(this.real + other.real, this.imaginary + other.imaginary)
  }

  multiply(other) {
    return new Complex(this.real * other.real - this.imaginary * other.imaginary, this.real * other.imaginary + this.imaginary * other.real)
  }

  absolute() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary)
  }
}

export default Complex;