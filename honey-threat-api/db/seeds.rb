# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Threat.create([
  {ip: "159.65.103.189", count: 101, lat: "37.3501", long: "-121.9850", country: "United States"},
  {ip: "112.170.78.118", count: 100, lat: "37.4100", long: "127.2570", country: "South Korea"},
  {ip: "54.37.138.135", count: 101, lat: "51.1000", long: "17.0333", country: "Poland"},
  {ip: "134.19.187.78", count: 5479, lat: "51.8656", long: "4.6629", country: "Netherlands"},
  {ip: "5.188.86.167", count: 6078, lat: "51.9000", long: "-8.9500", country: "Ireland"},
  {ip: "103.76.252.6", count: 101, lat: "22.7167", long: "75.8333", country: "India"},
  {ip: "88.214.26.90", count: 7867, lat: "51.2993", long: "9.4910", country: "Germany"},
  {ip: "185.220.221.221", count: 7311, lat: "50.0333", long: "14.4833", country: "Czech Republic "},
  {ip: "106.13.60.71", count: 101, lat: "39.9289", long: "116.3880", country: "China"},
  {ip: "181.110.240.194", count: 100, lat: "-33.1416", long: "-59.3097", country: "Argentina"},
])