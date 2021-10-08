const marble = require('../util/marble')
const granite = require('../util/granite')
const ceramic = require('../util/ceramic')
var marbleNames = marble.getMarbleName()
var marbleLinks = marble.getMarbleLink()
var graniteNames = granite.getGraniteName()
var graniteLinks = granite.getGraniteLink()
var ceramicNames = ceramic.getCeramicName()
var ceramicLinks = ceramic.getCeramicLink()

exports.getShop = (req,res,next) => {
    res.render('main');
}

exports.getMarbles = (req, res, next) => {
    res.render('marble',{
        marbleNames : marbleNames,
        marbleLinks : marbleLinks
    })
}

exports.getGranites = (req, res, next) => {
    res.render('granite',{
        graniteNames : graniteNames,
        graniteLinks : graniteLinks
    })
}

exports.getCeramic = (req, res, next) => {
    res.render('ceramictiles',{
        ceramicNames : ceramicNames,
        ceramicLinks : ceramicLinks
    })
}