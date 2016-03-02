var users = {
	'xiaohong' : 123,
	'xiaoming' : 456,
	'xiaohui' :321
};

var username = '';

process.stdout.write('请输入用户名：\n');

process.stdin.on('data',(input) =>{
	input = input.toString().trim();
	
	if(!username){
		if(Object.keys(users).indexOf(input) === -1){
			process.stdout.write('该用户不存在\n');
			process.stdout.write('请输入用户名：\n');
			username = '';
		}else{
			process.stdout.write('请输入密码：\n');
			username = input;
		}
	}else{
		if(input == users[username]){
			process.stdout.write('登录成功\n');
			username='';
		}else{
			process.stdout.write('请重新输入密码：\n');
			
		}
	}
})
