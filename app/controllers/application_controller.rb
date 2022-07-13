class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # Add your routes here
    get "/users" do
        User.all.to_json
    end

    get "/ghosts" do
        Ghost.all.to_json
    end

    get "/houses" do
        House.all.to_json
    end

    get "/hauntings" do
        Haunting.all.to_json
    end

    delete "/users/:id" do
        User.find(params[:id]).destroy.to_json
    end

    delete "/ghosts/:id" do
        Ghost.find(params[:id]).destroy.to_json
    end

    delete "/houses/:id" do
        House.find(params[:id]).destroy.to_json
    end

    delete "/hauntings/:id" do
        Haunting.find(params[:id]).destroy.to_json
    end

    post "/users" do

        newUser = User.create(
            name: params[:name],
            password: params[:password],
            is_ghost: params[:is_ghost]
        )

        if(params[:is_ghost])
            Ghost.create(
                name: params[:name],
                picUrl: params[:picUrl],
                user_id: newUser.id
            )
        end
        
        newUser.to_json
    end
   
    post "/houses" do
        House.create(
            name: params[:name],
            location: params[:location],
            user_id: params[:user_id]
        ).to_json
    end

    post "/haunting" do
        Haunting.create(
            ghost_id: params[ghost_id],
            house_id: params[house_id]
        ).to_json
    end

    patch "/users/:id" do
        patchedUser = User.find(params[:id]).update(
            name: params[:name],
            password: params[:password]
        )

        if patchedUser.is_ghost
            patchedUser.ghost.update(name: params[:name])
        end

        patchedUser.to_json
    end

    patch "/ghosts/:id" do
        Ghost.find(params[:id]).update(
            name: params[:name]
        ).to_json
    end

    patch "/houses/:id" do
        House.find(params[:id]).update(
            name: params[:name],
            location: params[:location]
        ).to_json
    end
    
  end