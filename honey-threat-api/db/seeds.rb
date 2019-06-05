# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://intercept.sh/threatlists/

Threat.create([
  {ip: "159.65.103.189", count: 360, lat: "36.1699", long: "-115.1398", address: "Las Vegas"},
  {ip: "112.170.78.118", count: 998, lat: "39.9526", long: "-75.1652", address: "Philadelphia"},
  {ip: "134.19.187.78", count: 187, lat: "32.7767", long: "-96.7970", address: "Dallas"},
  {ip: "5.188.86.167", count: 647, lat: "36.1627", long: "-86.7816", address: "Nashville"},
  {ip: "103.76.252.6", count: 185, lat: "33.4484", long: "-112.0740", address: "Phoenix"},
  {ip: "88.214.26.90", count: 38, lat: "47.6062", long: "-122.3321", address: "Seattle"},
  {ip: "185.220.221.221", count: 722, lat: "40.7128", long: "-74.0060", address: "New York"},
  {ip: "106.13.60.71", count: 498, lat: "33.6891", long: "-78.8867", address: "Myrtle Beach"},
  {ip: "181.110.240.194", count: 126, lat: "34.0686", long: "-117.9390", address: "West Covina"},
])
