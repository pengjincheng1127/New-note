const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin')
const miniCssPlugin=require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const obj = {
    mode: 'production',
    entry:{
        index:'./www/index.js'
    },
    // devServer:{
    //     // hot:true,
    //     port:8080,
    //     // open:true
    // },
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ],
                
                // //排除node_modules
                exclude:[
                    path.resolve(__dirname,"node_modules")
                ],
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'images/'
                        }
                    }
                ]
            }
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./www/index.html',
            filename:'index.html',
            title:'啧啧啧',
            minify:{
                removeComments:true,//去除html中的注释
                collapseWhitespace:true,//删除空白符和换行符
                collapseBooleanAttributes:true,//是否简写boolean格式的属性：disabled=“disabled”简写成disabled
                removeAttributeQuotes:true,//是否移除属性的引号默认为false
            }
        })
    ],
    optimization:{
        minimizer:[
            new TerserPlugin({
                cache:true,
                parallel:true,
                sourceMap:true,
                terserOptions:{
                    
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
     // output:{
    //     filename:'[name].js',
    //     path:path.resolve(__dirname,'./build');
    // },
}



//导出配置项

module.exports = obj