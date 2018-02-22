#!/usr/bin/env bash

pip install awscli
npm install
npm install -g @angular/cli
ng build --$DEPLOY_ENV
