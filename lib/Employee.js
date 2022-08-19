class Employee {
// Employee Constructor
constructor(name,id, email, role='Employee') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
}
// Get Name
getName() {
    return this.name;
}
// Get ID
getId() {
    return this.id;
}
// Get Email
getEmail() {
    return this.email;
}
// Get Role
getRole() {
    return this.role;
}
}
module.exports = Employee;


