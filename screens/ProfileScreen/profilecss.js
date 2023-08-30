module.exports = {
  container: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,1)',
   
    height:"100%"
  },
  headCont: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255, 0.07)",
    borderRadius:20,
    paddingHorizontal:5,
  },
  subHead: {
    padding: 10,
  },
  head1: {
    color: "white",
    fontSize: 20,
    fontWeight:700
  },
  head2: {
    fontSize:18,
    color: "rgba(255,255,255,0.5)",
  },


  // ImageCard

  imageCardCont: {
    marginTop: 10,
    justifyContent: "center",
  },

  editBtn: {
    fontSize: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 50,
    color:"white",
    borderWidth:1.5,
    borderColor:"rgba(255,255,255,.3)"

  },
  nameCard:{
    paddingVertical:10

  },
  name:{
    fontSize:26,
    color:"white",
    fontWeight:700

  },
  username:{
    fontSize:19,
    color:"rgba(255,255,255,.6)"

  },

  // AboutCard

  bio:{
    color:"rgba(255,255,255,1)",
    fontSize:21

  },
  links:{
    color:"white",
    fontSize:18

  },
  linksCont:{
    flexDirection:"row",
    opacity:.7,
    justifyContent:"space-between",
    width:"80%"
    

  },

  // Followerscard
  followers:{
    color:"rgba(255,255,255,.5)",
    fontSize:18

  },
  


  // lower profile card

  lowerCard:{
    flex:1,

    
  },
  topHead:{
    flexDirection:"row",
    justifyContent:"space-around",

  },
  eachHead:{
    color:"white",
    fontSize:20,
    fontWeight:700,
    paddingHorizontal:10,
    paddingVertical:8,
  }


};
