module.exports = {
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.9)",
  },
  headCont: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255, 0.07)",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 65,
  },
  subHead: {
    padding: 10,
  },
  head1: {
    color: "white",
    fontSize: 17,
    fontWeight: 700,
  },
  head2: {
    fontSize: 15,
    color: "rgba(255,255,255,0.5)",
  },

  // ImageCard

  imageCardCont: {
    marginTop: 10,
    justifyContent: "center",
  },

  editBtn: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "black",
    borderRadius: 50,
    color: "white",
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,.3)",
  },
  nameCard: {
    paddingVertical: 10,
  },
  name: {
    fontSize: 20,
    color: "white",
    fontWeight: 700,
  },
  username: {
    fontSize: 13,
    color: "rgba(255,255,255,.4)",
  },

  // AboutCard

  bio: {
    color: "rgba(255,255,255,.9)",
    fontSize: 15,
    
  },
  links: {
    color: "white",
    fontSize: 18,
  },
  linksCont: {
    flexDirection: "row",
    opacity: 0.7,
    justifyContent: "space-between",
    width: "80%",
  },

  // Followerscard
  followers: {
    color: "rgba(255,255,255,.4)",
    fontSize: 14,
  },

  // lower profile card

  lowerCard: {
    flex: 1,
  },
  topHead: {
    flexDirection: "row",
    marginTop:10,
   
  },
  eachHead: {
    color: "white",
    fontSize: 17,
    fontWeight: 700,
    // width:"50%"
  },
  eachHeadView: {
   marginHorizontal:50,
    width:80
  },

  // Edit profile

  profileImgCont: {
    marginVertical: 20,
    alignItems: "center",
  },
  profileInfoCont:{
    flex:1,
    paddingHorizontal:20,
    paddingVertical:10,
    gap:20,

  },
  inputBox:{
      fontSize: 17,
      color: "rgba(255,255,255,1)",
      borderBottomColor: "rgba(255,255,255,.3)",
      borderBottomWidth: 1,
      paddingVertical:3
   
  },
  inputBoxHead:{
    fontSize: 16, color: "rgba(255,255,255,.3)"
  }
};
