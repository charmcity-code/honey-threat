# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://intercept.sh/threatlists/

Threat.create([
  {ip: "159.65.103.189", count: 360, lat: "37.3501", long: "-121.9850", address: "United States \u{1F1FA}\u{1F1F8}"},
  {ip: "112.170.78.118", count: 38, lat: "37.4100", long: "127.2570", address: "South Korea \u{1F1F0}\u{1F1F7}"},
  {ip: "134.19.187.78", count: 187, lat: "51.8656", long: "4.6629", address: "Netherlands \u{1F1F3}\u{1F1F1}"},
  {ip: "5.188.86.167", count: 647, lat: "51.9000", long: "-8.9500", address: "Ireland \u{1F1EE}\u{1F1EA}"},
  {ip: "103.76.252.6", count: 185, lat: "22.7167", long: "75.8333", address: "India \u{1F1EE}\u{1F1F3}"},
  {ip: "88.214.26.90", count: 998, lat: "51.2993", long: "9.4910", address: "Germany \u{1F1E9}\u{1F1EA}"},
  {ip: "185.220.221.221", count: 377, lat: "50.0333", long: "14.4833", address: "Czech Republic \u{1F1E8}\u{1F1FF}"},
  {ip: "106.13.60.71", count: 498, lat: "39.9289", long: "116.3880", address: "China \u{1F1E8}\u{1F1F3}"},
  {ip: "181.110.240.194", count: 126, lat: "-33.1416", long: "-59.3097", address: "Argentina \u{1F1E6}\u{1F1F7}"},
])