console.log('SELECT * FROM USUARIO');

const result = await db.selectUsuario();
console.log(result);


console.log('INSERT INTO USUARIO'); 
const result1 = await db.insertUsuario({nome: "Zé", senha: "uihdssauihus783"});
console.log(result);

console.log('DELETE FROM USUARIO');
const result2 = await db.deleteUsuario(2);
console.log(result2);

console.log('UPDATE USUARIO');
const result3 = await db.updateUsuario(3, {nome: "Zé José", senha: "hhjdhjjhsd7368"});
console.log(result3);