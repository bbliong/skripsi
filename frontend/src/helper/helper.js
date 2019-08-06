function cekUser(user, role, department = 0){
    return user.filter(function(e){
      if (department !== 0){
        return e.role == role  && e.department == department
      }
      return  e.role == role
    })
}    