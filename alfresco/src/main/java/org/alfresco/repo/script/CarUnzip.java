package org.alfresco.repo.script;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.jscript.ScriptNode;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.model.FileFolderService;
import org.alfresco.service.cmr.model.FileInfo;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Created by rom4 on 8/26/14.
 */
public class CarUnzip extends BaseProcessorExtension  {

    /*provider exception for debug*/
    private AuthenticationUtil  authenticationUtil;

    public void setAuthenticationUtil(AuthenticationUtil authenticationUtil) {
        this.authenticationUtil = authenticationUtil;
    }


    /** Service registry */
    private ServiceRegistry services;

    /**
     * Set the service registry
     *
     * @param services  the service registry
     */
    public void setServiceRegistry(ServiceRegistry services)
    {
        this.services = services;
    }

    public void unzipCar (ScriptNode file, ScriptNode path) {

        byte[] buffer = new byte[1024];
        OutputStream outputStream = null;

        System.out.println("start");
        authenticationUtil.setRunAsUserSystem();
        FileFolderService fileFolderService = services.getFileFolderService();
        InputStream inputStream = fileFolderService.getReader(file.getNodeRef()).getContentInputStream();
        ZipInputStream zipInputStream = new ZipInputStream(inputStream);

        ZipEntry zipEntry;


        try {
            while ((zipEntry = zipInputStream.getNextEntry()) != null) {
                int len;
                FileInfo fileInfo = fileFolderService.create(path.getNodeRef(), zipEntry.getName(), ContentModel.TYPE_CONTENT);
                outputStream = fileFolderService.getWriter(fileInfo.getNodeRef()).getContentOutputStream();
                while ((len = zipInputStream.read(buffer)) > 0) {
                    if (path != null) {
                        outputStream.write(buffer, 0, len);
                    }
                }
                outputStream.close();
                zipInputStream.closeEntry();
            }
            zipInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }


    };


}
