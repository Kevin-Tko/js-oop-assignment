class Course {
    #price; // private property has to be defined here has to

    get price() {
        return "$" + this.#price;
    }

    set price(value) {
        let parsedValue = parseInt(value);
        if (parsedValue < 0) {
            throw "Invalid price";
        }
        this.#price = parsedValue;
    }

    constructor(title, courseLength, price) {
        this.title = title;
        this.courseLength = courseLength;
        this.price = price;
    }

    valueForMoney() {
        const [duration, units] = this.courseLength.split(" ");
        return `For ${this.#price}, you get ${
            parseInt(duration) / this.#price
        } weeks`;
    }

    courseSummary() {
        const summary = `${this.title} course, runs for ${this.courseLength} at a cost of ${this.price}`;
        return summary;
    }
}

class PracticalCourse extends Course {
    constructor(numOfExercises, title, courseLength, price) {
        super(title, courseLength, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log("This is a theoretical course");
    }
}

const courseOne = new Course("JavaScript", "12 weeks", 10);
console.log(courseOne.valueForMoney());
console.log(courseOne.courseSummary());

const practicalCS = new PracticalCourse(12, "Spring boot", "34 weeks", 68);
console.log(practicalCS.valueForMoney());

const thoryCS = new TheoreticalCourse("React Course", "13 weeks", 26);
console.log(thoryCS.valueForMoney());
thoryCS.publish();
