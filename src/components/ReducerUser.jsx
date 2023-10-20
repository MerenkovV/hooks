import { Button, Input, List, Space } from 'antd'
import React, { useReducer } from 'react'
import { DeleteOutlined } from '@ant-design/icons'

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT_TEXT":
            return {
                ...state,
                inputText: action.payload
            }
        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, state.inputText],
                inputText: ''
            }
        case "DELETE_POST":
            let arrId = (state.posts.length - 1) - action.payload
            return {
                ...state,
                posts: state.posts.filter((_, id)=>id!==arrId)
            }

        default: return state
    }
}

export default function ReducerUser() {
    let [state, dispatch] = useReducer(reducer, {
        posts: [],
        inputText: ''
    })

    const postHandler = () => {
        dispatch({ type: "ADD_POST" })
    }

    return (
        <div>
            <Space.Compact>
                <Input style={{ maxWidth: '30vw' }} value={state.inputText} onPressEnter={postHandler} onChange={e => { dispatch({ type: 'CHANGE_INPUT_TEXT', payload: e.target.value }) }} />
                <Button type='primary' onClick={postHandler}>Post</Button>
            </Space.Compact>
            <br /><br />
            <List
                style={{maxWidth: '40vw'}}
                size="small"
                bordered
                dataSource={state.posts.toReversed()}
                renderItem={(item, id) => <List.Item actions={[<Button danger shape='circle' onClick={() => { dispatch({ type: "DELETE_POST", payload: id }) }}><DeleteOutlined /></Button>]}>{item}</List.Item>}
            />
        </div>
    )
}
