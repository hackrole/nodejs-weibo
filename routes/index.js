
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '首页' });
};

exports.user = function(req, res){
    
};

exports.post = function(req, res){
    
};

exports.reg = function(req, res){
    res.render('reg', {
        title: '用户注册',
    });
};

exports.doReg = function(req, res){
    // 检测用户口令是否一致
    if(req.body['password-repeat'] != req.body['password']){
        req.flash('error', '再次输入的口令不一致');
        return res.redirect('/reg');
    }

    // 生成口令的散列值
    var md5 = crypto.creatHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    var newUser = new User({
        name: req.body.username,
        password: password,
    });

    // 检查用户是否以存在
    User.get(newUser.name, function(err, User){
        if(user){
            err = "Username already exists";
        }
        if(err){
            req.flash('error', err);
            return res.redirect('/reg');
        }
        // 如果不存在则新建用户
        newUser.save(function(err){
            if(err){
                req.flash('error', err);
                return res.redirect('/reg');
            }
            req.session.user = newUser;
            req.flash('success', '注册成功');
            res.redirect('/');
        });
    });
};

exports.login = function(req, res){
    
};

exports.doLogin = function(req, res){
    
};

exports.logout = function(req, res){
    
};
