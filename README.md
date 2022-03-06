### Website for the together project


## installation steps 

**Assuming you have node**

```
> git clone git@github.com:CashlessSociety/togetherproject_web.git
> cd togetherproject_web
```
(You can also use `https://github.com/CashlessSociety/togetherproject_web.git` but if you have been giving access to the repo its best to use the ssh version above))

```
> cd ~/cashless/togetherproject_web
> npm install
> npm start 
```

## Avataaars 

We are using avataaars from https://avataaars.com

There is a sketch file, which (if you download and install sketch) can be used to add/remove or update avataaar images.

Or if you wanna just tweak things you can (maybe) start with[this sketch file](https://sketch.com/s/ddf3016e-b669-4d6e-93f1-72e7f82533b7).. if you have the permissions etc

## Prerequsites 

**Node**
(currently working with v10.16.3)**

```
> command -v nvm
> nvm install v10.16.3
```

If you need to install node, on a mac, I'd consider using `nvm` to install it - exact install steps below


**exact install log**
```
: 1646530036:0;git clone git@github.com:CashlessSociety/togetherproject_web.git
: 1646530057:0;cd togetherproject_web
: 1646530059:0;npm install
: 1646530136:0;brew install nvm
: 1646530164:0;nvm
: 1646530200:0;subl ~/.zshrc
: 1646530246:0;p10k configure
: 1646530403:0;nvm 
: 1646530406:0;nvm list
: 1646530439:0;command -v nvm
: 1646530458:0;nvm install v10.16.3
: 1646530482:0;cd ~/cashless/togetherproject_web
: 1646530484:0;npm install
: 1646530553:0;npm start
