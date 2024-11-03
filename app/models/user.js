export class User {
    constructor({
      userId,
      username,
      description,
      email,
      firstName,
      lastName,
      departmentNameTh,
      majorName,
    }) {
      this.userId = userId;
      this.username = username;
      this.description = description;
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.departmentNameTh = departmentNameTh;
      this.majorName = majorName;
    }
  }