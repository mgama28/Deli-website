/*Exports to pages*/
exports.index = (req,res) =>{
    res.render('index');
};

exports.about = (req,res) =>{
    res.render('about');
};

exports.contact = (req,res) =>{
    res.render('contact');
};

exports.menu = (req,res) =>{
    res.render('menu');
};

exports.trays = (req,res) =>{
    res.render('trays');
};

exports.deliitems = (req,res) =>{
    res.render('deliitems');
}

exports.sandwiches = (req,res) =>{
    res.render('sandwiches');
}

exports.delimeats = (req,res) =>{
    res.render('delimeats');
}

exports.logRequestPaths = (req, res, next) =>{
    console.log(`Request made to: ${req.url}`);
};

