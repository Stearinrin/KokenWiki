class Usergroup < ApplicationRecord
  has_many :user_usergroups

  has_many :users, through: :user_usergroups


  belongs_to :create_user, class_name: "User"


  has_many :readable_pages, class_name: "Page",
                       foreign_key: "readable_group_id"
  has_many :editable_pages, class_name: "Page",
                        foreign_key: "editable_group_id"

  validates :name, uniqueness: true, length: { in: 1..50 }
end
