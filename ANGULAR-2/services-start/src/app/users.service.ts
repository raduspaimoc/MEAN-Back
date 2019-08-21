export class UserService{
    activeUsers = ['Max', 'Verga'];
    inactiveUsers = ['Chris', 'Verga Flacida'];

    setToActive(id: number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

    setToInactive(id: number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }
}