puts "🌱 Seeding users..."

User.create(name: "Casper", password: "password", is_ghost: True)
User.create(name: "Gengar", password: "password", is_ghost: True)
User.create(name: "Slimer", password: "password", is_ghost: True)
User.create(name: "King Hamlet", password: "password", is_ghost: True)
User.create(name: "The Flying Dutchman", password: "password", is_ghost: True)
User.create(name: "Myrtle 'Wailing Wanda' Warren", password: "password", is_ghost: True)
User.create(name: "Phantom", password: "password", is_ghost: True)
User.create(name: "Beetlejuice", password: "password", is_ghost: True)

User.create(name: "Unsuspecting Homeowner", password: "password", is_ghost: False)
User.create(name: "Creepy Old Man", password: "password", is_ghost: False)
User.create(name: "The 3 Witches", password: "password", is_ghost: False)
User.create(name: "Bob Robertson", password: "password", is_ghost: False)
User.create(name: "Rachel Ng", password: "password", is_ghost: False)
User.create(name: "Alex", password: "password", is_ghost: False)

puts "🌱 Seeding ghosts..."

Ghost.create(name: "Casper", picUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Casper_%28character%29.png/220px-Casper_%28character%29.png", user_id: User.all[0].id)
Ghost.create(name: "Gengar", picUrl: "https://archives.bulbagarden.net/media/upload/thumb/4/4d/Ash_Gengar.png/1200px-Ash_Gengar.png", user_id: User.all[1].id)
Ghost.create(name: "Slimer", picUrl: "https://static.wikia.nocookie.net/ghostbusters/images/8/87/SlimergbBR003bio.png/revision/latest?cb=20121006042628", user_id: User.all[2].id)
Ghost.create(name: "King Hamlet", picUrl: "https://cdn.mos.cms.futurecdn.net/GNzSXxmahE7eph7AXQbLCD-970-80.jpg", user_id: User.all[3].id)
Ghost.create(name: "The Flying Dutchman", picUrl: "https://external-preview.redd.it/Agr838yC38Ip2skS7mpPR99jIG4TO4ttMpvgbda5vhU.jpg?width=640&crop=smart&auto=webp&s=f169227c235284bb68ab947436a07a0ae4e64902", user_id: User.all[4].id)
Ghost.create(name: "Myrtle 'Wailing Wanda' Warren", picUrl: "https://www.looper.com/img/gallery/whatever-happened-to-moaning-myrtle-from-harry-potter/intro-1572369601.jpg", user_id: User.all[5].id)
Ghost.create(name: "Phantom", picUrl: "https://static.wikia.nocookie.net/scoobydoo/images/3/3e/Phantom_%28Hassle_in_the_Castle%29.png/revision/latest?cb=20200606174116", user_id: User.all[6].id)
Ghost.create(name: "Beetlejuice", picUrl: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2021/10/beetlejuice_1280x720.jpg", user_id: User.all[7].id)

puts "🌱 Seeding houses..."

House.create(name: "3 Blood Street", location: "3 Blood Street", description: "Fresh paint job!  Slight plumbing problems.", picUrl: "https://m.media-amazon.com/images/M/MV5BOGRiYmVlYjQtZWQyNC00MjA3LWJmMGUtOWNlNDExNjRlNDZiXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_.jpg", user_id: User.where(name: "Alex").first.id, distance: rand(1...100))
House.create(name: "Hill House", location: "10 Sutterheim Hill", description: "Gothic treasure in the hills.  Sun-drenched living room, blood-drenched foyer.", picUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/2018924/rs_1024x683-181024103742-1024-2-hill-house-ch-102418.jpg?fit=around%7C1024:683&output-quality=90&crop=1024:683;center,top", user_id: User.all.sample.id, rand(1...100))
House.create(name: "Test house", location: "", description: "", user_id: User.where(name: "Alex").first.id, distance: rand(1...100))
House.create(name: "Test house", location: "", description: "", user_id: User.where(name: "Alex").first.id, distance: rand(1...100))
House.create(name: "Test house", location: "", description: "", user_id: User.where(name: "Alex").first.id, distance: rand(1...100))
House.create(name: "Test house", location: "", description: "", user_id: User.where(name: "Alex").first.id, distance: rand(1...100))
House.create(name: "Test house", location: "", description: "", user_id: User.where(name: "Alex").first.id, distance: rand(1...100))
House.create(name: "Test house", location: "", description: "", user_id: User.where(name: "Alex").first.id, distance: rand(1...100))

puts "🌱 Seeding hauntings..."

10.times do
    Haunting.create(ghost: Ghost.all.sample, house: House.all.sample)
end

puts "✅ Done seeding!"