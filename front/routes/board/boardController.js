exports.list = (req,res)=>{
    res.render('board_list.html')
}

exports.view = (req,res)=>{
    res.render('board_view.html')
}

exports.modify = (req,res)=>{
    res.render('board_modify.html')
}

exports.write = (req,res)=>{
    res.render('board_write.html')
}