package com.thoughtworks.repositories;


import com.thoughtworks.entities.User;
import com.thoughtworks.util.JDBCUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


public class UserRepository implements UserRepositoryI {

    public User getUserByNameAndPassword(String userName, String password) {
        Connection conn = null;
        PreparedStatement pre = null;
        ResultSet result = null;
        User user = new User();
        try {
            conn = JDBCUtil.connectToDB();
            String sql = "SELECT id, userName, password FROM user WHERE userName = ? AND password = ?";
            pre = conn.prepareStatement(sql);
            pre.setString(1, userName);
            pre.setString(2, password);
            result = pre.executeQuery();
            while (result.next()) {
                user.setId(result.getInt("id"));
                user.setUserName(result.getString("userName"));
                user.setPassword(result.getString("password"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            JDBCUtil.releaseSource(result, pre, conn);
        }
        return user;
    }

    public void userRegister(User user) {
        Connection conn = null;
        PreparedStatement pre = null;
        try {
            conn = JDBCUtil.connectToDB();
            String sql = "INSERT INTO user (userName, password) VALUES (?, ?)";
            pre = conn.prepareStatement(sql);
            pre.setString(1, user.getUserName());
            pre.setString(2, user.getPassword());
            pre.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            JDBCUtil.releaseSource(pre, conn);
        }
    }

    public List<User> getUserList() {
        Connection conn = null;
        Statement stmt = null;
        ResultSet result = null;
        List<User> userList = new ArrayList<>();
        User user;
        try {
            conn = JDBCUtil.connectToDB();
            stmt = conn.createStatement();
            String sql = "SELECT id, userName, password FROM user";
            result = stmt.executeQuery(sql);
            while (result.next()) {
                user = new User();
                user.setId(result.getInt("id"));
                user.setUserName(result.getString("userName"));
                user.setPassword(result.getString("password"));
                userList.add(user);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            JDBCUtil.releaseSource(result, stmt, conn);
        }
        return userList;
    }
}
